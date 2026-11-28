import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax4b43b5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax4b43b5q"/>`,
		"fallback": "noviair-light:rows",
	});
}

export default Component;
