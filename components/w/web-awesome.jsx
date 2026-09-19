import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xssurv7iw.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xssurv7iw"/>`,
		"fallback": "fa6-solid:web-awesome",
	});
}

export default Component;
