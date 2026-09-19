import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/naq74d2mj.css';
import '../../css/h/hckszgbzg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="naq74d2mj"/><path clip-rule="evenodd" class="hckszgbzg"/></g>`,
		"fallback": "glyphs:sad-tear-bold",
	});
}

export default Component;
