import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pp3m6gboi.css';
import '../../css/h/h7tg_7ben.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pp3m6gboi"/><path class="h7tg_7ben"/></g>`,
		"fallback": "glyphs:note-duo",
	});
}

export default Component;
