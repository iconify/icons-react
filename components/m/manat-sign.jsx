import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yemq55oik.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yemq55oik"/>`,
		"fallback": "fa6-solid:manat-sign",
	});
}

export default Component;
