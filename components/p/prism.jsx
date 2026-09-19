import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7x37mbjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7x37mbjw"/>`,
		"fallback": "hugeicons:prism",
	});
}

export default Component;
