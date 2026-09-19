import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xit4yh0_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xit4yh0_i"/>`,
		"fallback": "circum:line-height",
	});
}

export default Component;
