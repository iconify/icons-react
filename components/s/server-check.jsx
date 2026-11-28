import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe2119bqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe2119bqa"/>`,
		"fallback": "noviair-light:server-check",
	});
}

export default Component;
