import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6n9f9bcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6n9f9bcb"/>`,
		"fallback": "thesvg-color:naver",
	});
}

export default Component;
