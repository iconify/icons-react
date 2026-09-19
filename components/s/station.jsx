import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6yd7cbna.css';
import '../../css/x/xxps6nbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6yd7cbna"/><path class="xxps6nbqr"/>`,
		"fallback": "boxicons:station",
	});
}

export default Component;
