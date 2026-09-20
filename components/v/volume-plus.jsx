import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko7gq5nqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko7gq5nqx"/>`,
		"fallback": "mdi:volume-plus",
	});
}

export default Component;
