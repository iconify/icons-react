import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/t/tf-qccb0k.css';
import '../../css/j/jeiznpbiv.css';
import '../../css/t/t5qtf7vmx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="tf-qccb0k"/><path class="jeiznpbiv"/><path class="t5qtf7vmx"/></g>`,
		"fallback": "icon-park:key-two",
	});
}

export default Component;
