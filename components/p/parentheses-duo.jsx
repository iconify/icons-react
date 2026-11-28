import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/ru4kvqb6t.css';
import '../../css/r/rryr48bex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ru4kvqb6t"/><path class="rryr48bex"/></g>`,
		"fallback": "iconaut:parentheses-duo",
	});
}

export default Component;
