import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5euglb9l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b5euglb9l"/>`,
		"fallback": "heroicons-solid:sun",
	});
}

export default Component;
