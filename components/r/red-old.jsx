import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oynu28bcy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oynu28bcy"/>`,
		"fallback": "file-icons:red-old",
	});
}

export default Component;
