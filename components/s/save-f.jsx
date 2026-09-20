import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_grw2bly.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_grw2bly"/>`,
		"fallback": "jam:save-f",
	});
}

export default Component;
