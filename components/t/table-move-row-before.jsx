import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9w_to-ne.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9w_to-ne"/>`,
		"fallback": "ooui:table-move-row-before",
	});
}

export default Component;
