import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr40wtbgy.css';

const viewBox = {"width":208,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr40wtbgy"/>`,
		"fallback": "ps:right",
	});
}

export default Component;
