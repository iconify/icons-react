import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tdqjvihnh.css';
import '../../css/t/txdrok0tf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary tdqjvihnh"/><path class="primary txdrok0tf"/></g>`,
		"fallback": "iconaut:three-fingers-duotone",
	});
}

export default Component;
