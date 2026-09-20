import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbp53x0bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbp53x0bb"/>`,
		"fallback": "mdi:not-equal-variant",
	});
}

export default Component;
