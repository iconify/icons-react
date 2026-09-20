import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwqp85_nj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwqp85_nj"/>`,
		"fallback": "ooui:trash",
	});
}

export default Component;
