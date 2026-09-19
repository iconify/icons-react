import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n702l_a5q.css';

const viewBox = {"width":1229,"height":677};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n702l_a5q"/>`,
		"fallback": "ls:tabezou",
	});
}

export default Component;
