import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdag2ccwj.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdag2ccwj"/>`,
		"fallback": "jam:screwdriver",
	});
}

export default Component;
