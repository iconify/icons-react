import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p0cc53bau.css';
import '../../css/h/ha9j-vbrj.css';
import '../../css/d/dhr2l13no.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p0cc53bau"/><path class="ha9j-vbrj"/><path class="dhr2l13no"/></g>`,
		"fallback": "fluent-emoji-flat:pushpin",
	});
}

export default Component;
