import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wg2o1gdzh.css';
import '../../css/k/k4i-fv--y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wg2o1gdzh"/><path class="k4i-fv--y"/></g>`,
		"fallback": "glyphs-poly:pen",
	});
}

export default Component;
