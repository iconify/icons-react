import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rcb2foilk.css';
import '../../css/w/w0hg9ublu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rcb2foilk"/><path class="w0hg9ublu"/></g>`,
		"fallback": "streamline-sharp:time-lapse",
	});
}

export default Component;
