import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky8c2yxsy.css';
import '../../css/o/oy5x1vbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky8c2yxsy"/><path class="oy5x1vbap"/>`,
		"fallback": "streamline-freehand:smiley-zipped",
	});
}

export default Component;
