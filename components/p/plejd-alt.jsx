import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4l8uwb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4l8uwb9x"/>`,
		"fallback": "cbi:plejd-alt",
	});
}

export default Component;
