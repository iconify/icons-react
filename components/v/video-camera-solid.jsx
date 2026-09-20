import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd8m2mqxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd8m2mqxa"/>`,
		"fallback": "pixel:video-camera-solid",
	});
}

export default Component;
