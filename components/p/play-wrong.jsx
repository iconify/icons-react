import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/a/afw5bxb9f.css';
import '../../css/f/f6px4o6ug.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="afw5bxb9f"/><path class="f6px4o6ug"/></g>`,
		"fallback": "icon-park-outline:play-wrong",
	});
}

export default Component;
