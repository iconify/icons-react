import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmxa0tngr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmxa0tngr"/>`,
		"fallback": "token:shi",
	});
}

export default Component;
