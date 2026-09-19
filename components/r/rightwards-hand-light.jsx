import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lm250x2mj.css';
import '../../css/y/yjq2_feke.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lm250x2mj"/><path clip-rule="evenodd" class="yjq2_feke"/></g>`,
		"fallback": "fluent-emoji-flat:rightwards-hand-light",
	});
}

export default Component;
