import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be3vdrb4s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be3vdrb4s"/>`,
		"fallback": "la:vimeo",
	});
}

export default Component;
