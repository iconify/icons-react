import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uh_bsl15p.css';
import '../../css/p/pamw94bod.css';
import '../../css/t/tm-lwkblw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uh_bsl15p"/><path class="pamw94bod"/><path class="tm-lwkblw"/></g>`,
		"fallback": "flag:th-1x1",
	});
}

export default Component;
