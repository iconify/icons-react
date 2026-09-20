import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytrf_vbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytrf_vbkn"/>`,
		"fallback": "thesvg-color:payback",
	});
}

export default Component;
