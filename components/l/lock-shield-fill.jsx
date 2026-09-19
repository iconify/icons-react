import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9-nxbkyp.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9-nxbkyp"/>`,
		"fallback": "f7:lock-shield-fill",
	});
}

export default Component;
