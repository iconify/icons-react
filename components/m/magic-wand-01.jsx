import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/g0oiieo4d.css';
import '../../css/i/ig5a48g4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="g0oiieo4d"/><path class="ig5a48g4q"/></g>`,
		"fallback": "hugeicons:magic-wand-01",
	});
}

export default Component;
