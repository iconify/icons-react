import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm4c8-w_n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm4c8-w_n"/>`,
		"fallback": "fa-solid:skiing",
	});
}

export default Component;
