import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1pmwjlxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1pmwjlxm"/>`,
		"fallback": "iconamoon:sorting-center-duotone",
	});
}

export default Component;
