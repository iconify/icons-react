import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8-oes8zd.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8-oes8zd"/>`,
		"fallback": "fa:stop",
	});
}

export default Component;
