import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbwlt8bjc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbwlt8bjc"/>`,
		"fallback": "devicon-plain:vala-wordmark",
	});
}

export default Component;
