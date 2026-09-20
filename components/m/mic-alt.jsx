import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3o-d3q7e.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3o-d3q7e"/>`,
		"fallback": "jam:mic-alt",
	});
}

export default Component;
