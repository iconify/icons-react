import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_ebj2hts.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u_ebj2hts"/>`,
		"fallback": "heroicons:shopping-bag-20-solid",
	});
}

export default Component;
