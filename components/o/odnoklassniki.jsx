import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chpo8u4lm.css';

const viewBox = {"width":272,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chpo8u4lm"/>`,
		"fallback": "zmdi:odnoklassniki",
	});
}

export default Component;
