import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqq-_hb-w.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqq-_hb-w"/>`,
		"fallback": "whh:mediarepeat",
	});
}

export default Component;
