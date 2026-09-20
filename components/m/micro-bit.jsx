import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehcfzl_ej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehcfzl_ej"/>`,
		"fallback": "thesvg-color:micro-bit",
	});
}

export default Component;
