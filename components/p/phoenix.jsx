import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gag2-lbkj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gag2-lbkj"/>`,
		"fallback": "file-icons:phoenix",
	});
}

export default Component;
