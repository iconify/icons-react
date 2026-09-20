import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q99b8eiec.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q99b8eiec"/>`,
		"fallback": "radix-icons:padding",
	});
}

export default Component;
