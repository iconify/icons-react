import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o0ul4bbyk.css';
import '../../css/x/xss6oqbzj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o0ul4bbyk"/><path class="xss6oqbzj"/></g>`,
		"fallback": "glyphs-poly:location-arrow",
	});
}

export default Component;
