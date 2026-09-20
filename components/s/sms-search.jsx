import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j7lgzkbaq.css';
import '../../css/x/xnxh71obt.css';
import '../../css/h/hvgzjjb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j7lgzkbaq"/><path class="xnxh71obt"/><path class="hvgzjjb7d"/></g>`,
		"fallback": "reicon:sms-search",
	});
}

export default Component;
