import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj7gj486n.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj7gj486n"/>`,
		"fallback": "whh:pixelbroadsword",
	});
}

export default Component;
