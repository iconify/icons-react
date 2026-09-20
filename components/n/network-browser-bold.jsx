import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6jndybtz.css';
import '../../css/o/ocih1mz8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6jndybtz"/><path class="ocih1mz8r"/>`,
		"fallback": "streamline-ultimate:network-browser-bold",
	});
}

export default Component;
