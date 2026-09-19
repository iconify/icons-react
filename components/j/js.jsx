import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcdrcvb5i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcdrcvb5i"/>`,
		"fallback": "cib:js",
	});
}

export default Component;
