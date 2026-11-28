import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw_dihbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw_dihbjl"/>`,
		"fallback": "noviair-light:sun-plus",
	});
}

export default Component;
