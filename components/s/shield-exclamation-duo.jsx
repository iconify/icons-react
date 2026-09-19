import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajsuvx4dq.css';
import '../../css/o/ok6uc_j_b.css';
import '../../css/i/iq5m3ebzf.css';
import '../../css/y/yp8brl62l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ajsuvx4dq"/><path class="ok6uc_j_b"/><path class="iq5m3ebzf"/><path class="yp8brl62l"/></g>`,
		"fallback": "glyphs:shield-exclamation-duo",
	});
}

export default Component;
