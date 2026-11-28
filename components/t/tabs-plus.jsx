import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_c1d8fvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_c1d8fvn"/>`,
		"fallback": "noviair-light:tabs-plus",
	});
}

export default Component;
