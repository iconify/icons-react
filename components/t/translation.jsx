import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2-bgsbvp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2-bgsbvp"/>`,
		"fallback": "dashicons:translation",
	});
}

export default Component;
