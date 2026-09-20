import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jke_9w8am.css';
import '../../css/p/px9v4k7lg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jke_9w8am"/><path class="px9v4k7lg"/></g>`,
		"fallback": "solar:volleyball-2-line-duotone",
	});
}

export default Component;
