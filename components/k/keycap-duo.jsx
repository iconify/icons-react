import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fuky73q9g.css';
import '../../css/l/lqq65fbvw.css';
import '../../css/z/zur4v2lvu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fuky73q9g"/><path class="lqq65fbvw"/><path class="zur4v2lvu"/></g>`,
		"fallback": "glyphs:keycap-duo",
	});
}

export default Component;
