import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/f/fawnadrdb.css';
import '../../css/w/wco3u70ih.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="fawnadrdb"/><path class="wco3u70ih"/></g>`,
		"fallback": "icon-park-outline:menu-fold-one",
	});
}

export default Component;
