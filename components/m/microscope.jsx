import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjyj0e8rb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjyj0e8rb"/>`,
		"fallback": "fa-solid:microscope",
	});
}

export default Component;
