import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tor4b0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9tor4b0c"/>`,
		"fallback": "mingcute:safe-lock-line",
	});
}

export default Component;
