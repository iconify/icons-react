import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4-2ht45e.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4-2ht45e"/>`,
		"fallback": "devicon-plain:leetcode-wordmark",
	});
}

export default Component;
