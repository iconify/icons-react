import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny7m4gbrr.css';

const viewBox = {"width":20,"height":18};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny7m4gbrr"/>`,
		"fallback": "jam:select-all",
	});
}

export default Component;
