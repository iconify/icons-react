import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9kyeodza.css';
import '../../css/w/wbt-tgj5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9kyeodza"/><path class="wbt-tgj5f"/>`,
		"fallback": "circum:square-remove",
	});
}

export default Component;
