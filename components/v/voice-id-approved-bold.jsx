import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngvbhrcoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngvbhrcoo"/>`,
		"fallback": "streamline-ultimate:voice-id-approved-bold",
	});
}

export default Component;
