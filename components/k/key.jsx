import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qqa-xrd9y.css';
import '../../css/a/a8xhfiina.css';
import '../../css/f/fozklcblg.css';
import '../../css/p/pbyhetbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qqa-xrd9y wm-shadow"/><path class="a8xhfiina"/><path class="fozklcblg"/><path class="pbyhetbuw"/></g>`,
		"fallback": "withicons-retro:key",
	});
}

export default Component;
