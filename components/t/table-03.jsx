import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfqnidc6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfqnidc6o"/>`,
		"fallback": "hugeicons:table-03",
	});
}

export default Component;
