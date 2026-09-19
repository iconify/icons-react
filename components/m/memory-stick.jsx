import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j155pvb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j155pvb9w"/>`,
		"fallback": "hugeicons:memory-stick",
	});
}

export default Component;
