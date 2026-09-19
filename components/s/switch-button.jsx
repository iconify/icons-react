import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bm5v79neo.css';
import '../../css/q/qy7fhdaaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="bm5v79neo"/><path class="qy7fhdaaz"/></g>`,
		"fallback": "icon-park-outline:switch-button",
	});
}

export default Component;
