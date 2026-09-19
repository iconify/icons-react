import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gaw1s1qji.css';
import '../../css/o/olnotz5yy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="gaw1s1qji"/><path class="olnotz5yy"/></g>`,
		"fallback": "icon-park-solid:wallet-two",
	});
}

export default Component;
