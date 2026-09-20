import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrzww_a4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrzww_a4d"/>`,
		"fallback": "thesvg-color:nubank",
	});
}

export default Component;
