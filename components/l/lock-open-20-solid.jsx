import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_-9w5b5h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j_-9w5b5h"/>`,
		"fallback": "heroicons:lock-open-20-solid",
	});
}

export default Component;
