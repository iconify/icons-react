import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-nvxs2oj.css';
import '../../css/v/v7l69tbtr.css';
import '../../css/k/ka-asdb9s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-nvxs2oj"/><path class="v7l69tbtr"/><path class="ka-asdb9s"/>`,
		"fallback": "energy-icons:tow-truck-20",
	});
}

export default Component;
