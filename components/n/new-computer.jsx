import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vw0fviyvx.css';
import '../../css/j/jo108-7wp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="vw0fviyvx"/><path class="jo108-7wp"/></g>`,
		"fallback": "icon-park-outline:new-computer",
	});
}

export default Component;
