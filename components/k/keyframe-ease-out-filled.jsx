import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4b5l8sta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4b5l8sta"/>`,
		"fallback": "boxicons:keyframe-ease-out-filled",
	});
}

export default Component;
