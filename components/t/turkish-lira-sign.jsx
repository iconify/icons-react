import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl8l_wbmi.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl8l_wbmi"/>`,
		"fallback": "fa7-solid:turkish-lira-sign",
	});
}

export default Component;
