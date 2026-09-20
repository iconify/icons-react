import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le-81vboo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le-81vboo"/>`,
		"fallback": "vaadin:pin",
	});
}

export default Component;
