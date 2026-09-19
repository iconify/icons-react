import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4u4ae28y.css';
import '../../css/j/jakrroejo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k4u4ae28y"/><path class="jakrroejo"/></g>`,
		"fallback": "glyphs:pill-duo",
	});
}

export default Component;
