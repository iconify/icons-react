import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/f/fohzlpbub.css';
import '../../css/r/rz6xoab1r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="fohzlpbub"/><path class="rz6xoab1r"/></g>`,
		"fallback": "icon-park-outline:layers",
	});
}

export default Component;
