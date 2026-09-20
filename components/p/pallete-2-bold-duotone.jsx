import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt5ganbfh.css';
import '../../css/t/tqowt8nqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt5ganbfh"/><path class="tqowt8nqd"/>`,
		"fallback": "solar:pallete-2-bold-duotone",
	});
}

export default Component;
