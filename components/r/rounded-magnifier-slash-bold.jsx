import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq5k-cbtl.css';
import '../../css/o/opdy_4y2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq5k-cbtl"/><path clip-rule="evenodd" class="opdy_4y2q"/>`,
		"fallback": "solar:rounded-magnifier-slash-bold",
	});
}

export default Component;
