import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc6dvcb-v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc6dvcb-v"/>`,
		"fallback": "ix:trend-sideways",
	});
}

export default Component;
