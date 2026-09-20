import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us21q3b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us21q3b7v"/>`,
		"fallback": "thesvg-color:rsocket",
	});
}

export default Component;
