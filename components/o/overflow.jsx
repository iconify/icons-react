import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wkaifstuo.css';
import '../../css/a/ag5hxhzxj.css';
import '../../css/z/zjw-bnhpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wkaifstuo"/><path class="ag5hxhzxj"/><path class="zjw-bnhpf"/></g>`,
		"fallback": "gg:overflow",
	});
}

export default Component;
