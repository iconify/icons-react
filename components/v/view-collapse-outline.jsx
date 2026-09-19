import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m2snylblg.css';
import '../../css/a/a43839bcb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m2snylblg"/><path class="a43839bcb"/></g>`,
		"fallback": "glyphs:view-collapse-outline",
	});
}

export default Component;
