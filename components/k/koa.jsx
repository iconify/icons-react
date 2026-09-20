import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrnhx7bwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrnhx7bwr"/>`,
		"fallback": "thesvg-color:koa",
	});
}

export default Component;
