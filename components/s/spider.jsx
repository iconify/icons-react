import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/x/xv7xeubyi.css';
import '../../css/l/lox2hi3vo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="xv7xeubyi"/><path class="lox2hi3vo"/></g>`,
		"fallback": "doodle-icons:spider",
	});
}

export default Component;
