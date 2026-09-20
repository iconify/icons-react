import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ywsgt1bmd.css';
import '../../css/v/vlzselbkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ywsgt1bmd"/><path class="vlzselbkt"/></g>`,
		"fallback": "mynaui:search-snooze",
	});
}

export default Component;
