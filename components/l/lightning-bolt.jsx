import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di4r6q8zq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di4r6q8zq"/>`,
		"fallback": "radix-icons:lightning-bolt",
	});
}

export default Component;
