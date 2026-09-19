import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pln8hgj9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pln8hgj9u"/>`,
		"fallback": "hugeicons:search-slash",
	});
}

export default Component;
