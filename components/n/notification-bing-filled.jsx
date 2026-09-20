import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj0_dtb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj0_dtb-p"/>`,
		"fallback": "reicon:notification-bing-filled",
	});
}

export default Component;
