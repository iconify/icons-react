import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/o1pd32bzs.css';
import '../../css/f/fm_ve5bbr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="o1pd32bzs"/><path class="fm_ve5bbr"/></g>`,
		"fallback": "icon-park-outline:parachute",
	});
}

export default Component;
