import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm9y-eble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm9y-eble"/>`,
		"fallback": "noviair-light:loader",
	});
}

export default Component;
