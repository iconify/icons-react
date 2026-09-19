import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdty80bkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdty80bkz"/>`,
		"fallback": "hugeicons:laptop-add",
	});
}

export default Component;
