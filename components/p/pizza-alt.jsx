import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2pq0ccjr.css';
import '../../css/d/di12r_hgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2pq0ccjr"/><path class="di12r_hgm"/>`,
		"fallback": "boxicons:pizza-alt",
	});
}

export default Component;
