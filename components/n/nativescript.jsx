import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im3f2_frr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im3f2_frr"/>`,
		"fallback": "thesvg-color:nativescript",
	});
}

export default Component;
