import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udpa8y6px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udpa8y6px"/>`,
		"fallback": "mdi-light:volume-off",
	});
}

export default Component;
