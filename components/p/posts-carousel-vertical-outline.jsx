import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hdzj-zbni.css';
import '../../css/x/xm4-qxbrj.css';
import '../../css/k/kfu7dr89j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hdzj-zbni"/><path clip-rule="evenodd" class="xm4-qxbrj"/><path class="kfu7dr89j"/></g>`,
		"fallback": "solar:posts-carousel-vertical-outline",
	});
}

export default Component;
