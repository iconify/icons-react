import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq3x47b4q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq3x47b4q"/>`,
		"fallback": "ooui:restart",
	});
}

export default Component;
