import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpwlrrj0w.css';
import '../../css/f/f1-j5o70g.css';
import '../../css/j/jzpmabcry.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpwlrrj0w"/><path class="f1-j5o70g"/><path class="jzpmabcry"/>`,
		"fallback": "energy-icons:manganese-20-bold",
	});
}

export default Component;
