import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rar3t3bhl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rar3t3bhl"/>`,
		"fallback": "heroicons-solid:magnifying-glass",
	});
}

export default Component;
