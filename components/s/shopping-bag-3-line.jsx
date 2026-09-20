import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw23e5btf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw23e5btf"/>`,
		"fallback": "mingcute:shopping-bag-3-line",
	});
}

export default Component;
