import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilnq8gpil.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilnq8gpil"/>`,
		"fallback": "la:th-large-solid",
	});
}

export default Component;
