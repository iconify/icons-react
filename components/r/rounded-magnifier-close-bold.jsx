import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq5k-cbtl.css';
import '../../css/u/ux6q9evhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq5k-cbtl"/><path clip-rule="evenodd" class="ux6q9evhy"/>`,
		"fallback": "solar:rounded-magnifier-close-bold",
	});
}

export default Component;
