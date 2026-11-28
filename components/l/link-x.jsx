import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx63acb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx63acb5q"/>`,
		"fallback": "noviair:link-x",
	});
}

export default Component;
