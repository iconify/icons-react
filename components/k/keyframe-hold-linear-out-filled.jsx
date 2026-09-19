import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjo07wwqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjo07wwqz"/>`,
		"fallback": "boxicons:keyframe-hold-linear-out-filled",
	});
}

export default Component;
