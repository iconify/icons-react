import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w19i0ospy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w19i0ospy"/>`,
		"fallback": "pixel:video-camera",
	});
}

export default Component;
