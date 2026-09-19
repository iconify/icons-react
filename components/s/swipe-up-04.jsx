import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5c5v29kw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5c5v29kw"/>`,
		"fallback": "hugeicons:swipe-up-04",
	});
}

export default Component;
