import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/q9thrpajc.css';
import '../../css/t/t-it26izg.css';
import '../../css/q/q3w-2jpjr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="q9thrpajc"/><path class="t-it26izg"/><path class="q3w-2jpjr"/></g>`,
		"fallback": "icon-park-outline:local",
	});
}

export default Component;
