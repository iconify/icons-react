import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u-gzj8brc.css';
import '../../css/l/lecjsfbxy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u-gzj8brc"/><path class="lecjsfbxy"/></g>`,
		"fallback": "glyphs-poly:maple-leaf",
	});
}

export default Component;
