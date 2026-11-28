import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zo_-bobgi.css';
import '../../css/h/hf2c9il5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary zo_-bobgi"/><path class="hf2c9il5g primary"/></g>`,
		"fallback": "iconaut:pancakes-duotone",
	});
}

export default Component;
