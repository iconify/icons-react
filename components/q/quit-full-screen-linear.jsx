import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jvzm0ac7t.css';
import '../../css/i/iwt0w8b9p.css';
import '../../css/u/u3tqh8b-y.css';
import '../../css/p/p2spj-b_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jvzm0ac7t"/><path class="iwt0w8b9p"/><path class="u3tqh8b-y"/><path class="p2spj-b_a"/></g>`,
		"fallback": "solar:quit-full-screen-linear",
	});
}

export default Component;
