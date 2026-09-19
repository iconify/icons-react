import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upaw9jfrj.css';
import '../../css/p/p56h_bbeb.css';
import '../../css/v/vece7s5mn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upaw9jfrj"/><path class="p56h_bbeb"/><path class="vece7s5mn"/>`,
		"fallback": "boxicons:message-question-mark",
	});
}

export default Component;
