import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3jd5jbff.css';
import '../../css/c/ckdtaybsi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d3jd5jbff"/><path class="ckdtaybsi"/></g>`,
		"fallback": "glyphs-poly:signal-3",
	});
}

export default Component;
