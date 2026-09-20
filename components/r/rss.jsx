import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qes_-u4hj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qes_-u4hj"/>`,
		"fallback": "simple-icons:rss",
	});
}

export default Component;
