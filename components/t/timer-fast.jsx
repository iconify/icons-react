import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e35iv0bxz.css';
import '../../css/c/cdxewcgaf.css';
import '../../css/q/q2ugb5u6c.css';
import '../../css/d/dn920gb_j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e35iv0bxz"/><path class="cdxewcgaf"/><path class="q2ugb5u6c"/><path class="dn920gb_j"/></g>`,
		"fallback": "glyphs-poly:timer-fast",
	});
}

export default Component;
