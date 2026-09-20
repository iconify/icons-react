import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk0s6nbqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk0s6nbqt"/>`,
		"fallback": "pixelarticons:slack",
	});
}

export default Component;
