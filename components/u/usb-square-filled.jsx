import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svie05b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="svie05b4k"/>`,
		"fallback": "reicon:usb-square-filled",
	});
}

export default Component;
