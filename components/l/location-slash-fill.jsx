import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl-q1cbki.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl-q1cbki"/>`,
		"fallback": "f7:location-slash-fill",
	});
}

export default Component;
