import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu87k4dnt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu87k4dnt"/>`,
		"fallback": "cib:steemit",
	});
}

export default Component;
