import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsfg5ubrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsfg5ubrl"/>`,
		"fallback": "noviair-light:message-square-clock",
	});
}

export default Component;
