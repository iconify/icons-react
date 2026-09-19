import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb6y5c0mv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb6y5c0mv"/>`,
		"fallback": "fa7-brands:square-bluesky",
	});
}

export default Component;
