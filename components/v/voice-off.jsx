import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/h/homsdm94q.css';
import '../../css/f/ff-ph6bgp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="homsdm94q"/><path class="ff-ph6bgp"/></g>`,
		"fallback": "icon-park-outline:voice-off",
	});
}

export default Component;
