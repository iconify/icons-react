import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebvtjz36o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebvtjz36o"/>`,
		"fallback": "ri:speed-line",
	});
}

export default Component;
