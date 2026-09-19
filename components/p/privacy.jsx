import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-i5jcr0s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-i5jcr0s"/>`,
		"fallback": "dashicons:privacy",
	});
}

export default Component;
