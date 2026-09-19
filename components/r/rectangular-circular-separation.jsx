import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/i17fuo5_y.css';
import '../../css/y/yhpmvvbra.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="i17fuo5_y"/><path class="yhpmvvbra"/></g>`,
		"fallback": "icon-park-outline:rectangular-circular-separation",
	});
}

export default Component;
