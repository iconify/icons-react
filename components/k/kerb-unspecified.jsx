import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq1wgzb0q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq1wgzb0q"/>`,
		"fallback": "temaki:kerb-unspecified",
	});
}

export default Component;
