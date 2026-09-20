import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgd-lss8z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgd-lss8z"/>`,
		"fallback": "radix-icons:underline",
	});
}

export default Component;
