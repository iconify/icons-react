import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd37n7bfi.css';

const viewBox = {"width":440,"height":416};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd37n7bfi"/>`,
		"fallback": "zmdi:spellcheck",
	});
}

export default Component;
