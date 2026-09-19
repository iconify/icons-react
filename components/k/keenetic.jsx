import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq6hxe9kr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq6hxe9kr"/>`,
		"fallback": "cbi:keenetic",
	});
}

export default Component;
