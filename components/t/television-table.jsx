import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4hnid7qo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4hnid7qo"/>`,
		"fallback": "hugeicons:television-table",
	});
}

export default Component;
