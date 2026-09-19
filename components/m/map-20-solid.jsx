import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t084e5b0e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t084e5b0e"/>`,
		"fallback": "heroicons:map-20-solid",
	});
}

export default Component;
