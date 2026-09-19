import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp02o6b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp02o6b7u"/>`,
		"fallback": "griddy-icons:send",
	});
}

export default Component;
