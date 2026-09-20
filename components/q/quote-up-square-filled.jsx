import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qorposezr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qorposezr"/>`,
		"fallback": "reicon:quote-up-square-filled",
	});
}

export default Component;
