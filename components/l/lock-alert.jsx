import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naza5tbcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="naza5tbcy"/>`,
		"fallback": "noviair-light:lock-alert",
	});
}

export default Component;
