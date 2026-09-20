import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy42w6b_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy42w6b_w"/>`,
		"fallback": "tdesign:pause-circle-stroke-filled",
	});
}

export default Component;
