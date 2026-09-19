import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhby9wc-l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhby9wc-l"/>`,
		"fallback": "fa7-solid:lungs",
	});
}

export default Component;
