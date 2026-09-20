import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5qruj8rq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5qruj8rq"/>`,
		"fallback": "simple-line-icons:screen-desktop",
	});
}

export default Component;
