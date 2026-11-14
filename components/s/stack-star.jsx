import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/di4ugvo9f.css';
import '../../css/f/ftp2xle1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="di4ugvo9f"/><path class="ftp2xle1f"/></g>`,
		"fallback": "hugeicons:stack-star",
	});
}

export default Component;
