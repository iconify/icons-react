import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gwxllit1o.css';
import '../../css/a/a4yzexygo.css';
import '../../css/v/vgxxywbao.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="gwxllit1o"/><path clip-rule="evenodd" class="a4yzexygo"/><path class="vgxxywbao"/></g>`,
		"fallback": "icon-park-outline:paper-money-two",
	});
}

export default Component;
