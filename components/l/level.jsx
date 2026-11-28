import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbrp0bbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbrp0bbah"/>`,
		"fallback": "noviair-light:level",
	});
}

export default Component;
