import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mogw6gb1u.css';
import '../../css/g/gq04hhbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mogw6gb1u"/><path class="gq04hhbwj"/></g>`,
		"fallback": "hugeicons:notification-snooze-03",
	});
}

export default Component;
