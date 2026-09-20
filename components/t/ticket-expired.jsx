import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zicomcbso.css';
import '../../css/u/u1wm0nb0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zicomcbso"/><path class="u1wm0nb0p"/></g>`,
		"fallback": "reicon:ticket-expired",
	});
}

export default Component;
