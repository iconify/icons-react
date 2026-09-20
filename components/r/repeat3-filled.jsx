import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_c7-bc2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_c7-bc2x"/>`,
		"fallback": "reicon:repeat3-filled",
	});
}

export default Component;
