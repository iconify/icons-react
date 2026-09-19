import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w__re01gs.css';
import '../../css/c/ctx28g1ir.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="w__re01gs"/><path class="ctx28g1ir"/>`,
		"fallback": "garden:search-fill-16",
	});
}

export default Component;
