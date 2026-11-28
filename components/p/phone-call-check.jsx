import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j23y-g-2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j23y-g-2r"/>`,
		"fallback": "noviair-light:phone-call-check",
	});
}

export default Component;
