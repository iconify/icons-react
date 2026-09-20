import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2ua-8bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2ua-8bux"/>`,
		"fallback": "uil:letter-hindi-a",
	});
}

export default Component;
