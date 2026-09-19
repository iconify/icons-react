import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnlyh2k5h.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnlyh2k5h"/>`,
		"fallback": "fa-solid:lock",
	});
}

export default Component;
