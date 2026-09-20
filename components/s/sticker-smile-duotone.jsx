import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-tlkjbkh.css';
import '../../css/e/e2c80abqq.css';
import '../../css/i/i7ytyep9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o-tlkjbkh"/><path class="e2c80abqq"/><path class="i7ytyep9x"/></g>`,
		"fallback": "reicon:sticker-smile-duotone",
	});
}

export default Component;
