import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ra_dfpp6b.css';
import '../../css/z/zdg6l3u0q.css';
import '../../css/m/mzej6wbap.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ra_dfpp6b"/><path class="zdg6l3u0q"/><path class="mzej6wbap"/></g>`,
		"fallback": "glyphs-poly:map",
	});
}

export default Component;
