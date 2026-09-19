import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rymil3blb.css';
import '../../css/t/tworusbgp.css';
import '../../css/q/qo8w8tbbo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rymil3blb"/><path class="tworusbgp"/><path class="qo8w8tbbo"/></g>`,
		"fallback": "glyphs:tachometer-6-duo",
	});
}

export default Component;
