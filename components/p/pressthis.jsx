import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6i0pt-4k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6i0pt-4k"/>`,
		"fallback": "dashicons:pressthis",
	});
}

export default Component;
