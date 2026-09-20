import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whp7a6bap.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whp7a6bap"/>`,
		"fallback": "pinhead:tipi-campsite-with-shekel",
	});
}

export default Component;
