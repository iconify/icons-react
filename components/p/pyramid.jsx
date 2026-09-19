import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/s27xeebpm.css';
import '../../css/n/nv_zo-33g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path clip-rule="evenodd" class="s27xeebpm"/><path class="nv_zo-33g"/></g>`,
		"fallback": "icon-park-outline:pyramid",
	});
}

export default Component;
