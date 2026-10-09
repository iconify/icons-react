import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq5np1vsf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq5np1vsf"/>`,
		"fallback": "energy-icons:message-circle-20-bold",
	});
}

export default Component;
