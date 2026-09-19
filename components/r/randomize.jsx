import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2k_bn38y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2k_bn38y"/>`,
		"fallback": "dashicons:randomize",
	});
}

export default Component;
