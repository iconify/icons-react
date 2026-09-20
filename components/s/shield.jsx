import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf3o9ac6z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf3o9ac6z"/>`,
		"fallback": "vaadin:shield",
	});
}

export default Component;
