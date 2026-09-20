import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6b9rho6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6b9rho6x"/>`,
		"fallback": "vadivam:server",
	});
}

export default Component;
