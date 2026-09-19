import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk1lm37nu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk1lm37nu"/>`,
		"fallback": "dinkie-icons:qq-filled",
	});
}

export default Component;
