import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj_a3_b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj_a3_b4l"/>`,
		"fallback": "cbi:netflix",
	});
}

export default Component;
