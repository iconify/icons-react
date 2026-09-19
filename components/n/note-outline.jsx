import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pac306byp.css';
import '../../css/n/nwrl2rjgh.css';
import '../../css/c/c80aj8b-s.css';
import '../../css/c/cwstqz83y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pac306byp"/><path clip-rule="evenodd" class="nwrl2rjgh"/><path class="c80aj8b-s"/><path clip-rule="evenodd" class="cwstqz83y"/></g>`,
		"fallback": "glyphs:note-outline",
	});
}

export default Component;
