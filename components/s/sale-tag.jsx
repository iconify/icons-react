import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoegt1bvo.css';

const viewBox = {"width":464,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoegt1bvo"/>`,
		"fallback": "ps:sale-tag",
	});
}

export default Component;
