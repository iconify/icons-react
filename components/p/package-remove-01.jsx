import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0hn8zakz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0hn8zakz"/>`,
		"fallback": "hugeicons:package-remove-01",
	});
}

export default Component;
