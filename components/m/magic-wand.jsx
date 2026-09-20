import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9w-xz9jc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9w-xz9jc"/>`,
		"fallback": "radix-icons:magic-wand",
	});
}

export default Component;
