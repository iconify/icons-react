import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dy2c4igvu.css';
import '../../css/k/kmn6tbnwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dy2c4igvu"/><path class="kmn6tbnwf"/></g>`,
		"fallback": "iconoir:tiktok",
	});
}

export default Component;
