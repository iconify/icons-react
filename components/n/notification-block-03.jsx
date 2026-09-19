import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pa4jbtn7i.css';
import '../../css/f/fs98lf4cp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pa4jbtn7i"/><path class="fs98lf4cp"/></g>`,
		"fallback": "hugeicons:notification-block-03",
	});
}

export default Component;
