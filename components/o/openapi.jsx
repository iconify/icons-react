import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odrgo8ori.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odrgo8ori"/>`,
		"fallback": "file-icons:openapi",
	});
}

export default Component;
