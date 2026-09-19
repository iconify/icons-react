import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q2we6hb0y.css';
import '../../css/e/ei71-ie3j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q2we6hb0y"/><path class="ei71-ie3j"/></g>`,
		"fallback": "glyphs-poly:tree-4",
	});
}

export default Component;
