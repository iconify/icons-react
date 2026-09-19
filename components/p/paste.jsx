import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vghglv62h.css';

const viewBox = {"width":384,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vghglv62h"/>`,
		"fallback": "zmdi:paste",
	});
}

export default Component;
