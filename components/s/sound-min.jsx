import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hd9ovxj7q.css';
import '../../css/o/o-m39ibnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hd9ovxj7q"/><path class="o-m39ibnf"/></g>`,
		"fallback": "iconoir:sound-min",
	});
}

export default Component;
