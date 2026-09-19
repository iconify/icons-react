import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l6j13pbkr.css';
import '../../css/a/a8vjpobae.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l6j13pbkr"/><path class="a8vjpobae"/></g>`,
		"fallback": "glyphs:trash-1-duo",
	});
}

export default Component;
