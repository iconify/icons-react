import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/w0l95_bea.css';
import '../../css/v/vlf9sc5tl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="w0l95_bea"/><path class="vlf9sc5tl"/></g>`,
		"fallback": "icon-park-outline:shield-add",
	});
}

export default Component;
