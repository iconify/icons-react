import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl2r66bdp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl2r66bdp"/>`,
		"fallback": "ix:ruler-horizontal",
	});
}

export default Component;
