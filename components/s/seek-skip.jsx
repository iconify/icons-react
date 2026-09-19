import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctmlb8_7m.css';
import '../../css/o/ohca03fbp.css';
import '../../css/c/cy8-8obke.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ctmlb8_7m"><path class="ohca03fbp"/><path class="cy8-8obke"/></g>`,
		"fallback": "glyphs-poly:seek-skip",
	});
}

export default Component;
