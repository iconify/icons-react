import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqgla7d8g.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqgla7d8g"/>`,
		"fallback": "whh:tagged",
	});
}

export default Component;
