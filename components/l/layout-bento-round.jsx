import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdq7d7bfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdq7d7bfj"/>`,
		"fallback": "coolicons:layout-bento-round",
	});
}

export default Component;
