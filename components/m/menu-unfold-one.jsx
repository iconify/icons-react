import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/f/fawnadrdb.css';
import '../../css/a/a9kdh9bkj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="fawnadrdb"/><path class="a9kdh9bkj"/></g>`,
		"fallback": "icon-park-solid:menu-unfold-one",
	});
}

export default Component;
