import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0t26ccmo.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0t26ccmo"/>`,
		"fallback": "lineicons:play-store-fill",
	});
}

export default Component;
