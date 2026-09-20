import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqd3_w6nh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eqd3_w6nh"/>`,
		"fallback": "ix:tag-arrow-left",
	});
}

export default Component;
