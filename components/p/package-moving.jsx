import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xbt37cb6k.css';
import '../../css/v/vkpw_xb8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xbt37cb6k"/><path class="vkpw_xb8g"/></g>`,
		"fallback": "hugeicons:package-moving",
	});
}

export default Component;
