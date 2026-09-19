import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ivw0ljwdx.css';
import '../../css/g/gr6ocbsdt.css';
import '../../css/h/hhokpkr2m.css';
import '../../css/d/d_ydp-b6l.css';
import '../../css/y/y0dtj59ys.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ivw0ljwdx"/><path class="gr6ocbsdt"/><path class="hhokpkr2m"/><path class="d_ydp-b6l"/><path class="y0dtj59ys"/></g>`,
		"fallback": "fluent-emoji-flat:military-helmet",
	});
}

export default Component;
