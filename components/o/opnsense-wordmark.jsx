import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f00c69yzr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f00c69yzr"/>`,
		"fallback": "devicon-plain:opnsense-wordmark",
	});
}

export default Component;
