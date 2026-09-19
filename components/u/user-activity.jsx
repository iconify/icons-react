import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcw__-b2h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcw__-b2h"/>`,
		"fallback": "carbon:user-activity",
	});
}

export default Component;
