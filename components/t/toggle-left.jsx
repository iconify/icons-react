import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4xiqk_0v.css';
import '../../css/o/oo004ivrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4xiqk_0v"/><path class="oo004ivrh"/>`,
		"fallback": "bx:toggle-left",
	});
}

export default Component;
