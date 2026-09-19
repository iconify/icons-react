import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aeapafzcl.css';
import '../../css/h/hyc2yv4cf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aeapafzcl"/><path class="hyc2yv4cf"/></g>`,
		"fallback": "hugeicons:skull",
	});
}

export default Component;
