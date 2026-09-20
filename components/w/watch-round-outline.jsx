import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh8x5liyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qh8x5liyv"/>`,
		"fallback": "solar:watch-round-outline",
	});
}

export default Component;
