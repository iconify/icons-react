import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ded_uc9fm.css';
import '../../css/t/tqm2n-bqj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ded_uc9fm"/><path class="tqm2n-bqj"/></g>`,
		"fallback": "fluent-emoji-flat:left-facing-fist-medium",
	});
}

export default Component;
