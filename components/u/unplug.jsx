import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwc-_dbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwc-_dbgc"/>`,
		"fallback": "hugeicons:unplug",
	});
}

export default Component;
