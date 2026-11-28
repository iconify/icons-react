import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r8hlyibay.css';
import '../../css/y/yxdu62y1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="r8hlyibay"/><path class="yxdu62y1f"/></g>`,
		"fallback": "iconaut:thermometer",
	});
}

export default Component;
