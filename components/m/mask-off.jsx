import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfp_8ibvf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfp_8ibvf"/>`,
		"fallback": "radix-icons:mask-off",
	});
}

export default Component;
