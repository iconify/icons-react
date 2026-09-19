import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6vxa-b2i.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6vxa-b2i"/>`,
		"fallback": "fa6-solid:ribbon",
	});
}

export default Component;
