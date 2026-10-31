import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj5ibzbur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj5ibzbur"/>`,
		"fallback": "withicons:map-pin-check-gloss",
	});
}

export default Component;
