import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/y/y_954pbno.css';
import '../../css/a/a_ux_9bkl.css';
import '../../css/k/kb9zbkb1z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="y_954pbno"/><path class="a_ux_9bkl"/><circle class="kb9zbkb1z"/></g>`,
		"fallback": "icon-park-outline:sphere",
	});
}

export default Component;
