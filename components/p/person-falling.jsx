import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf40h41pm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf40h41pm"/>`,
		"fallback": "fa6-solid:person-falling",
	});
}

export default Component;
