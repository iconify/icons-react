import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihvmary2y.css';
import '../../css/y/y1oz-jo5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihvmary2y"/><path class="y1oz-jo5e"/>`,
		"fallback": "tdesign:send-cancel-filled",
	});
}

export default Component;
