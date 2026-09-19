import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w4e0pebzc.css';
import '../../css/j/jtzjoi53s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w4e0pebzc"/><path class="jtzjoi53s"/></g>`,
		"fallback": "glyphs:layout-1-duo",
	});
}

export default Component;
