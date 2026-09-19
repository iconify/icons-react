import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qe0g46bxg.css';
import '../../css/m/m2bjnnb2a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="qe0g46bxg"/><path class="m2bjnnb2a"/></g>`,
		"fallback": "icon-park-outline:phone-call",
	});
}

export default Component;
