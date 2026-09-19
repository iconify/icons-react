import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gt-mihb7i.css';
import '../../css/h/hvzd0ubol.css';
import '../../css/z/znaej_v8z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="gt-mihb7i"/><path class="hvzd0ubol"/><path class="znaej_v8z"/></g>`,
		"fallback": "icon-park-solid:mail-unpacking",
	});
}

export default Component;
