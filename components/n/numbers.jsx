import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykinii4jh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykinii4jh"/>`,
		"fallback": "andrsrxn:numbers",
	});
}

export default Component;
