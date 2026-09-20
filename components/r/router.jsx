import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmp63wxsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmp63wxsh"/>`,
		"fallback": "mdi:router",
	});
}

export default Component;
