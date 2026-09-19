import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en241i7xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en241i7xq"/>`,
		"fallback": "boxicons:lira",
	});
}

export default Component;
