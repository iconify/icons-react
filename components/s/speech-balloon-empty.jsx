import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzgw8sbmz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzgw8sbmz"/>`,
		"fallback": "dinkie-icons:speech-balloon-empty",
	});
}

export default Component;
