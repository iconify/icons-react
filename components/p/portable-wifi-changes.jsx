import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq457jqzf.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq457jqzf"/>`,
		"fallback": "zmdi:portable-wifi-changes",
	});
}

export default Component;
