import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tup0qkl1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tup0qkl1q"/>`,
		"fallback": "octicon:trophy-24",
	});
}

export default Component;
