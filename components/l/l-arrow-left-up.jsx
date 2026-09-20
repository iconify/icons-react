import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x5r6-dbuz.css';
import '../../css/m/mgmjmczln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x5r6-dbuz"/><path class="mgmjmczln"/></g>`,
		"fallback": "mage:l-arrow-left-up",
	});
}

export default Component;
