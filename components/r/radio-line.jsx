import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yawx-mb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yawx-mb9d"/>`,
		"fallback": "mingcute:radio-line",
	});
}

export default Component;
