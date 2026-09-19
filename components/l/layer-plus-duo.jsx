import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s51y5no9m.css';
import '../../css/q/q9d8uuvac.css';
import '../../css/h/h00g_jboa.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s51y5no9m"/><path class="q9d8uuvac"/><path class="h00g_jboa"/></g>`,
		"fallback": "glyphs:layer-plus-duo",
	});
}

export default Component;
