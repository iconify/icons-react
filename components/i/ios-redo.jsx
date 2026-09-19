import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alzky0bbz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alzky0bbz"/>`,
		"fallback": "ion:ios-redo",
	});
}

export default Component;
