import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq6pfdcca.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq6pfdcca"/>`,
		"fallback": "ooui:strikethrough-a",
	});
}

export default Component;
