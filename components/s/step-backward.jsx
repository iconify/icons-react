import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie2opebeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie2opebeh"/>`,
		"fallback": "mdi:step-backward",
	});
}

export default Component;
