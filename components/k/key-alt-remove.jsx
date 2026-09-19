import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp8sdbcdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp8sdbcdh"/>`,
		"fallback": "iconoir:key-alt-remove",
	});
}

export default Component;
