import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab2by8v5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab2by8v5q"/>`,
		"fallback": "reicon:more-circle3",
	});
}

export default Component;
