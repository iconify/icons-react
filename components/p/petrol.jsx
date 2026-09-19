import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/ohsqqcc5j.css';
import '../../css/q/q7nw25yhn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ohsqqcc5j"/><path class="q7nw25yhn"/></g>`,
		"fallback": "icon-park-outline:petrol",
	});
}

export default Component;
