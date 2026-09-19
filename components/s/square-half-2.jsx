import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rysq24_6r.css';
import '../../css/u/u5nxb4npp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="rysq24_6r"/><path clip-rule="evenodd" class="u5nxb4npp"/></g>`,
		"fallback": "glyphs-poly:square-half-2",
	});
}

export default Component;
