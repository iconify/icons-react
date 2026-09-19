import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xovmwqfiq.css';

const viewBox = {"width":388,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xovmwqfiq"/>`,
		"fallback": "file-icons:macaulay2",
	});
}

export default Component;
