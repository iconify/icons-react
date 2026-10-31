import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu4c7ydtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu4c7ydtl"/>`,
		"fallback": "coolicons:label-bulk-round",
	});
}

export default Component;
