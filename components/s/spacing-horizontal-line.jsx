import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvywgob4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvywgob4s"/>`,
		"fallback": "mingcute:spacing-horizontal-line",
	});
}

export default Component;
