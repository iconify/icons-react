import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgvw5skfz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgvw5skfz"/>`,
		"fallback": "vaadin:superscript",
	});
}

export default Component;
