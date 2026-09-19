import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6dknbc5i.css';

const viewBox = {"width":377,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6dknbc5i"/>`,
		"fallback": "file-icons:lsl",
	});
}

export default Component;
