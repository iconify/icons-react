import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6br75yqv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6br75yqv"/>`,
		"fallback": "selfhst:pve-ups-dark",
	});
}

export default Component;
