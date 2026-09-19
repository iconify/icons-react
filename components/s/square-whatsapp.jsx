import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g32d_5bal.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g32d_5bal"/>`,
		"fallback": "fa7-brands:square-whatsapp",
	});
}

export default Component;
