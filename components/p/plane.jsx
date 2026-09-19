import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_o2s1b2s.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_o2s1b2s"/>`,
		"fallback": "fa-solid:plane",
	});
}

export default Component;
