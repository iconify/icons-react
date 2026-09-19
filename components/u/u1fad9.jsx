import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp51r9b1x.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp51r9b1x"/>`,
		"fallback": "dinkie-icons:u1fad9",
	});
}

export default Component;
