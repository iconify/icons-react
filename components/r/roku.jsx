import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mep9_ebte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mep9_ebte"/>`,
		"fallback": "thesvg-color:roku",
	});
}

export default Component;
