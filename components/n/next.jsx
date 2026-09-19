import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw6ppnbrr.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw6ppnbrr"/>`,
		"fallback": "fad:next",
	});
}

export default Component;
