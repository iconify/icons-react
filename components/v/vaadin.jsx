import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6anttb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6anttb9h"/>`,
		"fallback": "thesvg-color:vaadin",
	});
}

export default Component;
