import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqy-2vh-q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqy-2vh-q"/>`,
		"fallback": "ion:ios-minus-empty",
	});
}

export default Component;
