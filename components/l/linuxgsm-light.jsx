import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvpg-6bna.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvpg-6bna"/>`,
		"fallback": "selfhst:linuxgsm-light",
	});
}

export default Component;
