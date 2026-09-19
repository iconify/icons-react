import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/a/am1_mpf-b.css';
import '../../css/o/odhm74bfl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="am1_mpf-b"/><path class="odhm74bfl"/></g>`,
		"fallback": "icon-park-outline:send-backward",
	});
}

export default Component;
