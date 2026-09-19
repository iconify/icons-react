import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iz2zpvbwh.css';
import '../../css/l/l1p_qreog.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iz2zpvbwh"/><path class="l1p_qreog"/></g>`,
		"fallback": "fluent-emoji-flat:no-entry",
	});
}

export default Component;
