import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftxh2yu-e.css';
import '../../css/p/pinggybge.css';
import '../../css/e/e3jlgobxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftxh2yu-e"/><path class="pinggybge"/><path class="e3jlgobxk"/>`,
		"fallback": "solar:square-double-alt-arrow-right-bold-duotone",
	});
}

export default Component;
