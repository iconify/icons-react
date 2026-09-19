import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s72ooqb2z.css';
import '../../css/h/ho8201-pa.css';
import '../../css/m/mkugsdbzl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s72ooqb2z"/><path class="ho8201-pa"/><path class="mkugsdbzl"/></g>`,
		"fallback": "glyphs:pencil-duo",
	});
}

export default Component;
