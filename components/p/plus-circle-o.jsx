import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh4_mkb5m.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh4_mkb5m"/>`,
		"fallback": "zmdi:plus-circle-o",
	});
}

export default Component;
