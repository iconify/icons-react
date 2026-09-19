import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d-83kj-6q.css';
import '../../css/t/ts8aqxboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="d-83kj-6q"/><path class="ts8aqxboo"/></g>`,
		"fallback": "hugeicons:structure-fail",
	});
}

export default Component;
