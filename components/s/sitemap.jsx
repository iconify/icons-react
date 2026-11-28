import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d66__ndqj.css';
import '../../css/v/vn0mvuk9v.css';
import '../../css/z/zcrz0bcfr.css';
import '../../css/x/x6k5oubzl.css';
import '../../css/b/bxf12obpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d66__ndqj"/><path class="vn0mvuk9v"/><path class="zcrz0bcfr"/><path class="x6k5oubzl"/><path class="bxf12obpa"/></g>`,
		"fallback": "iconaut:sitemap",
	});
}

export default Component;
