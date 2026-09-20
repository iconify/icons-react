import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhpi9jbet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhpi9jbet"/>`,
		"fallback": "ri:message-2-fill",
	});
}

export default Component;
