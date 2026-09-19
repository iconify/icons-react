import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f6qn43w2n.css';
import '../../css/e/etkvk3y4g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f6qn43w2n"/><path class="etkvk3y4g"/></g>`,
		"fallback": "glyphs:layout-2-duo",
	});
}

export default Component;
