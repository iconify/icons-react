import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m06gt_svh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m06gt_svh"/>`,
		"fallback": "heroicons-solid:video-camera",
	});
}

export default Component;
