import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/salrc2btu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="salrc2btu"/>`,
		"fallback": "selfhst:pve-ups-light",
	});
}

export default Component;
