import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6tzhbbzf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6tzhbbzf"/>`,
		"fallback": "dashicons:video-alt3",
	});
}

export default Component;
