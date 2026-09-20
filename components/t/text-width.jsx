import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omju9dpqm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omju9dpqm"/>`,
		"fallback": "vaadin:text-width",
	});
}

export default Component;
