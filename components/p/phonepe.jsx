import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-f7f_xkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-f7f_xkm"/>`,
		"fallback": "thesvg-color:phonepe",
	});
}

export default Component;
