import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps6co1fpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps6co1fpd"/>`,
		"fallback": "keyline-icons:message-square-duotone",
	});
}

export default Component;
