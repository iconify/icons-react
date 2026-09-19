import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lva-ambtb.css';
import '../../css/g/gncp5zbdw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lva-ambtb"/><path class="gncp5zbdw"/></g>`,
		"fallback": "glyphs:shoe-print-duo",
	});
}

export default Component;
