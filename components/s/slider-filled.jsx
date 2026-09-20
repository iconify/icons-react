import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk0le6bbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk0le6bbd"/>`,
		"fallback": "reicon:slider-filled",
	});
}

export default Component;
