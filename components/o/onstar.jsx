import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhz5bouyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhz5bouyg"/>`,
		"fallback": "thesvg-color:onstar",
	});
}

export default Component;
