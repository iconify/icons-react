import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppmm91byd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppmm91byd"/>`,
		"fallback": "si:phone-add-call-line",
	});
}

export default Component;
