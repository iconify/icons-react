import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa8f_iukb.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa8f_iukb"/>`,
		"fallback": "jam:shopping-cart",
	});
}

export default Component;
