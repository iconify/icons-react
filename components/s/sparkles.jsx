import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/e6magr92w.css';
import '../../css/u/ux7a-acay.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="e6magr92w"/><path class="ux7a-acay"/></g>`,
		"fallback": "glyphs-poly:sparkles",
	});
}

export default Component;
