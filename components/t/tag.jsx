import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/h/hwhey4boo.css';
import '../../css/k/kvh9upbae.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="hwhey4boo"/><path class="kvh9upbae"/></g>`,
		"fallback": "icon-park-outline:tag",
	});
}

export default Component;
