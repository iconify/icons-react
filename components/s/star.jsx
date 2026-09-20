import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l17g6jb0q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l17g6jb0q"/>`,
		"fallback": "pinhead:star",
	});
}

export default Component;
