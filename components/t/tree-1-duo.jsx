import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-1oqmhbp.css';
import '../../css/x/x2rkoy-dq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d-1oqmhbp"/><path class="x2rkoy-dq"/></g>`,
		"fallback": "glyphs:tree-1-duo",
	});
}

export default Component;
