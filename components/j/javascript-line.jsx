import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh9u6ecdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh9u6ecdr"/>`,
		"fallback": "ri:javascript-line",
	});
}

export default Component;
