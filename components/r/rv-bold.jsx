import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y35c8wdas.css';
import '../../css/h/hqvwm-e6q.css';
import '../../css/u/unjd7ud_q.css';
import '../../css/u/uoxdxxbbs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y35c8wdas"/><rect class="hqvwm-e6q"/><path class="unjd7ud_q"/><path class="uoxdxxbbs"/></g>`,
		"fallback": "glyphs:rv-bold",
	});
}

export default Component;
