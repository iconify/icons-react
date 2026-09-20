import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1_0f7bzo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1_0f7bzo"/>`,
		"fallback": "vaadin:resize-h",
	});
}

export default Component;
