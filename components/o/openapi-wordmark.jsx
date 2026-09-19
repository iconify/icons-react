import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic_-zr8ts.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic_-zr8ts"/>`,
		"fallback": "devicon-plain:openapi-wordmark",
	});
}

export default Component;
