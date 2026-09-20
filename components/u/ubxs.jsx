import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ladlm4_ju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ladlm4_ju"/>`,
		"fallback": "token:ubxs",
	});
}

export default Component;
