import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/c/c5faowpqd.css';
import '../../css/f/fm_ve5bbr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="c5faowpqd"/><path class="fm_ve5bbr"/></g>`,
		"fallback": "icon-park-solid:parachute",
	});
}

export default Component;
