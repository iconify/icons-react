import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5o9zrbpr.css';
import '../../css/x/xwbchab1b.css';
import '../../css/i/ij1cq3b5g.css';

const viewBox = {"width":18,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5o9zrbpr"/><path class="xwbchab1b"/><path class="ij1cq3b5g"/>`,
		"fallback": "fontisto:java",
	});
}

export default Component;
