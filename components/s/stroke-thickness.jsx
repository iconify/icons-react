import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ir4kah-ll.css';
import '../../css/r/rfjq0k54a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ir4kah-ll"/><path class="rfjq0k54a"/></g>`,
		"fallback": "proicons:stroke-thickness",
	});
}

export default Component;
