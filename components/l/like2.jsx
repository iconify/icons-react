import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oy_3s8b3v.css';
import '../../css/v/v5jshh2bo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="oy_3s8b3v"/><path class="v5jshh2bo"/></g>`,
		"fallback": "reicon:like2",
	});
}

export default Component;
