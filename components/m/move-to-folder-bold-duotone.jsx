import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq2hqvwyz.css';
import '../../css/q/q5070xbhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq2hqvwyz"/><path class="q5070xbhz"/>`,
		"fallback": "solar:move-to-folder-bold-duotone",
	});
}

export default Component;
