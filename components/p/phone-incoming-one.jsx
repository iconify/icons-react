import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/v/v01686idz.css';
import '../../css/e/e-xtayzvh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="v01686idz"/><path class="e-xtayzvh"/></g>`,
		"fallback": "icon-park-solid:phone-incoming-one",
	});
}

export default Component;
