import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_-9k8bbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_-9k8bbc"/>`,
		"fallback": "thesvg:libretube",
	});
}

export default Component;
