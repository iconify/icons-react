import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8jm03bzw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8jm03bzw"/>`,
		"fallback": "ion:md-mail-open",
	});
}

export default Component;
