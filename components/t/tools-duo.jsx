import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oyxvwvb9z.css';
import '../../css/v/v2-sg-bdy.css';
import '../../css/n/nxpruiwiw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oyxvwvb9z"/><path class="v2-sg-bdy"/><path class="nxpruiwiw"/></g>`,
		"fallback": "glyphs:tools-duo",
	});
}

export default Component;
