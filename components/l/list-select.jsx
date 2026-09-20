import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg77dbcxl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg77dbcxl"/>`,
		"fallback": "vaadin:list-select",
	});
}

export default Component;
