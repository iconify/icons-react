import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdpzaubws.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdpzaubws"/>`,
		"fallback": "picon:shield",
	});
}

export default Component;
