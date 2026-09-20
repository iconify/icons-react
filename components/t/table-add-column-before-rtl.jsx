import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8113pt6x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8113pt6x"/>`,
		"fallback": "ooui:table-add-column-before-rtl",
	});
}

export default Component;
