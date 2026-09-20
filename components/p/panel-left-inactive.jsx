import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8bi2496u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8bi2496u"/>`,
		"fallback": "mynaui:panel-left-inactive",
	});
}

export default Component;
