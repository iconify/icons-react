import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nny3q-ber.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nny3q-ber"/>`,
		"fallback": "jam:volume-down",
	});
}

export default Component;
