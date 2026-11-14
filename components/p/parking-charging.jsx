import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aqgpwq1vl.css';
import '../../css/f/fc9u2cb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aqgpwq1vl"/><path class="fc9u2cb3k"/></g>`,
		"fallback": "evicons:parking-charging",
	});
}

export default Component;
