import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vwr4cebbh.css';
import '../../css/l/luc89ccgl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vwr4cebbh"/><path class="luc89ccgl"/></g>`,
		"fallback": "glyphs:tornado-outline",
	});
}

export default Component;
