import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7t5znbaw.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7t5znbaw"/>`,
		"fallback": "fa-solid:map-marker-alt",
	});
}

export default Component;
