import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfpo1o8mc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfpo1o8mc"/>`,
		"fallback": "thesvg-color:uml",
	});
}

export default Component;
