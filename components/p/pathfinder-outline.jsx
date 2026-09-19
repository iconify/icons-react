import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/ddudem44t.css';
import '../../css/b/b-y0hx86f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ddudem44t"/><path class="b-y0hx86f"/></g>`,
		"fallback": "hugeicons:pathfinder-outline",
	});
}

export default Component;
