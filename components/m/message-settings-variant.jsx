import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3xmjpb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3xmjpb0y"/>`,
		"fallback": "mdi:message-settings-variant",
	});
}

export default Component;
