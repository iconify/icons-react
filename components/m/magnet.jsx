import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko--2qbsy.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko--2qbsy"/>`,
		"fallback": "dinkie-icons:magnet",
	});
}

export default Component;
