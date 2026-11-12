import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prptthbtt.css';
import '../../css/z/zo-mdg_qh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prptthbtt"/><path class="zo-mdg_qh"/>`,
		"fallback": "selfhst:teslamate",
	});
}

export default Component;
