import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e8cignbfk.css';
import '../../css/w/wahcdwlcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e8cignbfk"/><path class="wahcdwlcz"/></g>`,
		"fallback": "hugeicons:turtle-neck",
	});
}

export default Component;
