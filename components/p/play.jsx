import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqi-weisu.css';

const viewBox = {"width":240,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqi-weisu"/>`,
		"fallback": "zmdi:play",
	});
}

export default Component;
