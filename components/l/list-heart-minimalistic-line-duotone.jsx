import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s19aowben.css';
import '../../css/m/mvkasiemb.css';
import '../../css/y/y8xtn591b.css';
import '../../css/b/b4_g5c43k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s19aowben"/><path class="mvkasiemb"/><path class="y8xtn591b"/><path class="b4_g5c43k"/></g>`,
		"fallback": "solar:list-heart-minimalistic-line-duotone",
	});
}

export default Component;
