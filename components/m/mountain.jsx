import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1-q9we5x.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1-q9we5x"/>`,
		"fallback": "dinkie-icons:mountain",
	});
}

export default Component;
