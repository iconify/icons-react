import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpuz2vkdq.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpuz2vkdq"/>`,
		"fallback": "fa-solid:user-md",
	});
}

export default Component;
