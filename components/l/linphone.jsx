import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhg8cmb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhg8cmb8d"/>`,
		"fallback": "thesvg:linphone",
	});
}

export default Component;
