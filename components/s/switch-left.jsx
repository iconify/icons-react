import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_3us-pxg.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_3us-pxg"/>`,
		"fallback": "jam:switch-left",
	});
}

export default Component;
