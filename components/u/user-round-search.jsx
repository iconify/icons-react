import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h271qpb9e.css';
import '../../css/f/f0kec1b7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h271qpb9e"/><path class="f0kec1b7d"/></g>`,
		"fallback": "hugeicons:user-round-search",
	});
}

export default Component;
