import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebcspyb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebcspyb4a"/>`,
		"fallback": "lineicons:php",
	});
}

export default Component;
