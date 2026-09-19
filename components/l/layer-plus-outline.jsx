import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a9p14lbzj.css';
import '../../css/x/xi_9gzk6d.css';
import '../../css/w/w69p6vbed.css';
import '../../css/a/a9y4_e-0f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a9p14lbzj"/><path clip-rule="evenodd" class="xi_9gzk6d"/><path class="w69p6vbed"/><path clip-rule="evenodd" class="a9y4_e-0f"/></g>`,
		"fallback": "glyphs:layer-plus-outline",
	});
}

export default Component;
