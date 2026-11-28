import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te427ubvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te427ubvi"/>`,
		"fallback": "noviair-light:send-check",
	});
}

export default Component;
