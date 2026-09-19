import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxok0n99r.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxok0n99r"/>`,
		"fallback": "zmdi:search-in-page",
	});
}

export default Component;
