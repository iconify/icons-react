import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_43-rbvl.css';
import '../../css/e/eco8wha2q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q_43-rbvl"/><path class="eco8wha2q"/></g>`,
		"fallback": "glyphs:note-pad-1-duo",
	});
}

export default Component;
