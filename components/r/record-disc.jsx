import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/o/ojp9--njg.css';
import '../../css/i/iv98e-b8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="vkcj4bcdm"/><path class="ojp9--njg"/><path class="iv98e-b8u"/></g>`,
		"fallback": "icon-park-outline:record-disc",
	});
}

export default Component;
