import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msv-82bfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msv-82bfp"/>`,
		"fallback": "thesvg-color:unacademy",
	});
}

export default Component;
