import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2m9b2bcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2m9b2bcc"/>`,
		"fallback": "mdi:numeric-three-circle-outline",
	});
}

export default Component;
