import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy6pjk5oq.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy6pjk5oq"/>`,
		"fallback": "picon:mushroom",
	});
}

export default Component;
