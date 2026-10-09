import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q06plnibn.css';
import '../../css/b/bb-6nmboa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q06plnibn"/><path class="bb-6nmboa"/>`,
		"fallback": "energy-icons:rewind-20-bold",
	});
}

export default Component;
