import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3btl7bxi.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3btl7bxi"/>`,
		"fallback": "jam:star",
	});
}

export default Component;
