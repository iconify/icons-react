import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k091tb0hb.css';
import '../../css/q/qkp19wbeb.css';
import '../../css/b/b-f3-gzch.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="k091tb0hb"/><path class="qkp19wbeb"/><rect class="b-f3-gzch"/></g>`,
		"fallback": "glyphs-poly:mobile-tablet",
	});
}

export default Component;
