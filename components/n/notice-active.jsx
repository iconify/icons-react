import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aldv0z1kr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aldv0z1kr"/>`,
		"fallback": "fe:notice-active",
	});
}

export default Component;
