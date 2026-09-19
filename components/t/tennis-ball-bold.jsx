import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/htao7sagh.css';
import '../../css/u/uka4prbuv.css';
import '../../css/n/nvlvqpbyf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="htao7sagh"/><path class="uka4prbuv"/><path class="nvlvqpbyf"/></g>`,
		"fallback": "glyphs:tennis-ball-bold",
	});
}

export default Component;
