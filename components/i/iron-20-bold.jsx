import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xldecsnzb.css';
import '../../css/v/vgmnx8bzw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xldecsnzb"/><path class="vgmnx8bzw"/>`,
		"fallback": "energy-icons:iron-20-bold",
	});
}

export default Component;
