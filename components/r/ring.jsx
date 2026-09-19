import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/ibil_bbjh.css';
import '../../css/o/oftu6aboy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ibil_bbjh"/><path class="oftu6aboy"/></g>`,
		"fallback": "icon-park-solid:ring",
	});
}

export default Component;
