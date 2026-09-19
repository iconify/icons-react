import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfptr2-1k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfptr2-1k"/>`,
		"fallback": "ion:ios-checkmark-empty",
	});
}

export default Component;
