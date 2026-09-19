import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sup606y1b.css';
import '../../css/b/blcprgz6v.css';
import '../../css/n/nlp7aobgj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sup606y1b"/><path class="blcprgz6v"/><path class="nlp7aobgj"/></g>`,
		"fallback": "glyphs-poly:trash-1",
	});
}

export default Component;
