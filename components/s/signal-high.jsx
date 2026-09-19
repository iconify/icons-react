import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b68na8seu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b68na8seu"/>`,
		"fallback": "hugeicons:signal-high",
	});
}

export default Component;
