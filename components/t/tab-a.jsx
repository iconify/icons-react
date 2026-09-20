import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq_gakbwz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq_gakbwz"/>`,
		"fallback": "vaadin:tab-a",
	});
}

export default Component;
