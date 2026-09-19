import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stvv9dr8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stvv9dr8v"/>`,
		"fallback": "hugeicons:send-horizontal",
	});
}

export default Component;
