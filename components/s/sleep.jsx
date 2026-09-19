import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jge4l-p6y.css';
import '../../css/k/kvnld0b2g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="jge4l-p6y"/><path class="kvnld0b2g"/></g>`,
		"fallback": "icon-park-solid:sleep",
	});
}

export default Component;
