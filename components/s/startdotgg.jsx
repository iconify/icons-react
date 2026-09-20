import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/citx28jbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="citx28jbk"/>`,
		"fallback": "thesvg-color:startdotgg",
	});
}

export default Component;
