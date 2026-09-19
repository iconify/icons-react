import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp8oo_bbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp8oo_bbm"/>`,
		"fallback": "griddy-icons:sunset-filled",
	});
}

export default Component;
