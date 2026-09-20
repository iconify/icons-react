import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd3nyebrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd3nyebrt"/>`,
		"fallback": "lineicons:tiktok-alt",
	});
}

export default Component;
