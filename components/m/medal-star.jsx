import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tawrpdb4t.css';
import '../../css/m/mt3oabbtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tawrpdb4t"/><path class="mt3oabbtx"/>`,
		"fallback": "boxicons:medal-star",
	});
}

export default Component;
