import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/o76v0vh3i.css';
import '../../css/x/xdmoomhwk.css';
import '../../css/x/x8q1kacfw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="o76v0vh3i"/><path class="xdmoomhwk"/><path class="x8q1kacfw"/></g>`,
		"fallback": "icon-park-solid:send-to-back",
	});
}

export default Component;
