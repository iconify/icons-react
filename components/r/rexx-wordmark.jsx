import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9rcu-b4l.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9rcu-b4l"/>`,
		"fallback": "devicon-plain:rexx-wordmark",
	});
}

export default Component;
