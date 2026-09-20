import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv_f63b0r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv_f63b0r"/>`,
		"fallback": "vaadin:moon-o",
	});
}

export default Component;
