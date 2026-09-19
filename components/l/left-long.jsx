import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po20zu72v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po20zu72v"/>`,
		"fallback": "fa6-solid:left-long",
	});
}

export default Component;
