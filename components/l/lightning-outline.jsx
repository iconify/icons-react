import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lchqymb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lchqymb2c"/>`,
		"fallback": "bitcoin-icons:lightning-outline",
	});
}

export default Component;
