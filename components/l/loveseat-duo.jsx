import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rhl8btbnt.css';
import '../../css/b/bdsyk5b6o.css';
import '../../css/h/h-tc3zb4v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rhl8btbnt"/><path class="bdsyk5b6o"/><path class="h-tc3zb4v"/></g>`,
		"fallback": "glyphs:loveseat-duo",
	});
}

export default Component;
