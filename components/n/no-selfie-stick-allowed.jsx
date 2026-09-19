import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wul82ibrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wul82ibrp"/>`,
		"fallback": "guidance:no-selfie-stick-allowed",
	});
}

export default Component;
