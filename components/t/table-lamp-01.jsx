import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxhvmirsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxhvmirsz"/>`,
		"fallback": "hugeicons:table-lamp-01",
	});
}

export default Component;
