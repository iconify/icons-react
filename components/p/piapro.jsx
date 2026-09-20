import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej0p2x0ci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej0p2x0ci"/>`,
		"fallback": "thesvg:piapro",
	});
}

export default Component;
