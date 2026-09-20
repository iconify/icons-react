import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofp7wzg4h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofp7wzg4h"/>`,
		"fallback": "la:stop-solid",
	});
}

export default Component;
