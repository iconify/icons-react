import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw4l773-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw4l773-k"/>`,
		"fallback": "lucide:message-circle-off",
	});
}

export default Component;
