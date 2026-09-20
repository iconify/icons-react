import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl407cb7d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl407cb7d"/>`,
		"fallback": "zondicons:pause-solid",
	});
}

export default Component;
