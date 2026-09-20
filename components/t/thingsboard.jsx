import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfan_xeus.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfan_xeus"/>`,
		"fallback": "selfhst:thingsboard",
	});
}

export default Component;
