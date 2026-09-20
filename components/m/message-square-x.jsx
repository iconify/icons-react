import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twud3tbse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twud3tbse"/>`,
		"fallback": "keyline-icons:message-square-x",
	});
}

export default Component;
