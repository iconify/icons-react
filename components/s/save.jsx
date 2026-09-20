import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yptd0dbga.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yptd0dbga"/>`,
		"fallback": "jam:save",
	});
}

export default Component;
