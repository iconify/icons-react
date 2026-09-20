import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqqdg9bxx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqqdg9bxx"/>`,
		"fallback": "ooui:mathematics-display-inline",
	});
}

export default Component;
