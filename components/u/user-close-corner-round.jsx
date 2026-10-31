import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fee3yq8ea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fee3yq8ea"/>`,
		"fallback": "coolicons:user-close-corner-round",
	});
}

export default Component;
