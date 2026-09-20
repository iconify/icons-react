import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch81kq1xx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch81kq1xx"/>`,
		"fallback": "thesvg-color:ludwig",
	});
}

export default Component;
