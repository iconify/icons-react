import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut1_9hdzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut1_9hdzs"/>`,
		"fallback": "ci:message",
	});
}

export default Component;
