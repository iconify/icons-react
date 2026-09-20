import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udb7-vw_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udb7-vw_x"/>`,
		"fallback": "uil:water",
	});
}

export default Component;
