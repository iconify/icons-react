import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g65hvpbwb.css';
import '../../css/q/q_b498z9b.css';
import '../../css/c/cxf8pnbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g65hvpbwb"/><path class="q_b498z9b"/><path class="cxf8pnbrz"/>`,
		"fallback": "solar:moon-sleep-bold",
	});
}

export default Component;
