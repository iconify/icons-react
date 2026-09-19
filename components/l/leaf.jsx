import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcv4s00xs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcv4s00xs"/>`,
		"fallback": "fa6-solid:leaf",
	});
}

export default Component;
