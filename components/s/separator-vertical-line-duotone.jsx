import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/va1552nwh.css';
import '../../css/x/x1f4lc3zb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="va1552nwh"/><path class="x1f4lc3zb"/></g>`,
		"fallback": "solar:separator-vertical-line-duotone",
	});
}

export default Component;
