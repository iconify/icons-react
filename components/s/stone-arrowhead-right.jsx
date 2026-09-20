import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjl1wbc5q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjl1wbc5q"/>`,
		"fallback": "pinhead:stone-arrowhead-right",
	});
}

export default Component;
