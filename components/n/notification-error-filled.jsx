import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsb8z6dli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsb8z6dli"/>`,
		"fallback": "tdesign:notification-error-filled",
	});
}

export default Component;
