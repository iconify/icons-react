import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8pcxmt_r.css';

const viewBox = {"width":392,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8pcxmt_r"/>`,
		"fallback": "zmdi:smartphone-setup",
	});
}

export default Component;
