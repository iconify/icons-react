import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb2so-xcd.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb2so-xcd"/>`,
		"fallback": "jam:rubber",
	});
}

export default Component;
