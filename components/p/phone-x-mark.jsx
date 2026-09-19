import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbmw3_k5z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cbmw3_k5z"/>`,
		"fallback": "heroicons-solid:phone-x-mark",
	});
}

export default Component;
