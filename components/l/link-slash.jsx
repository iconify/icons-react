import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6rpfejaq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6rpfejaq"/>`,
		"fallback": "fa7-solid:link-slash",
	});
}

export default Component;
