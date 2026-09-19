import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rn8uhhj2h.css';
import '../../css/e/e-xtayzvh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="rn8uhhj2h"/><path class="e-xtayzvh"/></g>`,
		"fallback": "icon-park-outline:phone-incoming-one",
	});
}

export default Component;
