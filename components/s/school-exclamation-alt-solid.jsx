import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jv-29ihls.css';
import '../../css/s/s07ur1brs.css';
import '../../css/j/jfywoqvur.css';
import '../../css/d/dihtcvbfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jv-29ihls"/><path class="s07ur1brs"/><path clip-rule="evenodd" class="jfywoqvur"/><path class="dihtcvbfg"/></g>`,
		"fallback": "flowbite:school-exclamation-alt-solid",
	});
}

export default Component;
