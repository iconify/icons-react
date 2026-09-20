import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5cmb4bjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5cmb4bjp"/>`,
		"fallback": "uil:stop-circle",
	});
}

export default Component;
