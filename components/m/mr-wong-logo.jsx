import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2qjz7y_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2qjz7y_m"/>`,
		"fallback": "streamline-logos:mr-wong-logo",
	});
}

export default Component;
