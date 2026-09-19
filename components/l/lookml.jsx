import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycl9gobdm.css';

const viewBox = {"width":329,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycl9gobdm"/>`,
		"fallback": "file-icons:lookml",
	});
}

export default Component;
