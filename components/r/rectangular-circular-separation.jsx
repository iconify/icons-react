import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/sn7b5bbov.css';
import '../../css/y/yhpmvvbra.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="sn7b5bbov"/><path class="yhpmvvbra"/></g>`,
		"fallback": "icon-park-solid:rectangular-circular-separation",
	});
}

export default Component;
