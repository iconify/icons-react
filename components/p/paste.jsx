import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzxfjo2ee.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzxfjo2ee"/>`,
		"fallback": "fa7-solid:paste",
	});
}

export default Component;
