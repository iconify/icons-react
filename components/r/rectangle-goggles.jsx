import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7s11ybex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7s11ybex"/>`,
		"fallback": "hugeicons:rectangle-goggles",
	});
}

export default Component;
