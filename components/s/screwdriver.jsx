import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em9wgcbzm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em9wgcbzm"/>`,
		"fallback": "fa6-solid:screwdriver",
	});
}

export default Component;
