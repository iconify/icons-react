import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y92m0cfbr.css';

const viewBox = {"width":368,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y92m0cfbr"/>`,
		"fallback": "zmdi:view-array",
	});
}

export default Component;
