import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/k/k4sp1ycwv.css';
import '../../css/o/oftu6aboy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="k4sp1ycwv"/><path class="oftu6aboy"/></g>`,
		"fallback": "icon-park-outline:ring",
	});
}

export default Component;
