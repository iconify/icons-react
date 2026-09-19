import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h8_czlbzy.css';
import '../../css/a/a_opsx2am.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h8_czlbzy"/><path class="a_opsx2am"/></g>`,
		"fallback": "iconoir:log-denied",
	});
}

export default Component;
