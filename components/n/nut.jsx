import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sz4revdyj.css';
import '../../css/m/mo0h-x4lp.css';
import '../../css/r/ru0g9b5-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sz4revdyj"/><path class="mo0h-x4lp"/><path class="ru0g9b5-i"/></g>`,
		"fallback": "tdesign:nut",
	});
}

export default Component;
