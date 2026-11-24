import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf-8gmbja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf-8gmbja"/>`,
		"fallback": "sidekickicons:step-forward",
	});
}

export default Component;
