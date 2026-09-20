import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unt32jbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unt32jbnl"/>`,
		"fallback": "pixelarticons:mood-sad",
	});
}

export default Component;
