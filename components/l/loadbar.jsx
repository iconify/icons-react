import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r64x3ubrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="r64x3ubrb"/>`,
		"fallback": "gg:loadbar",
	});
}

export default Component;
