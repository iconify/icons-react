import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhx-zm9ew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhx-zm9ew"/>`,
		"fallback": "tabler:letter-l",
	});
}

export default Component;
