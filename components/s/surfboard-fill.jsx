import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fubg32b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fubg32b3x"/>`,
		"fallback": "mingcute:surfboard-fill",
	});
}

export default Component;
