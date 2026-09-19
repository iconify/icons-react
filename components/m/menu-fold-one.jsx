import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/f/fawnadrdb.css';
import '../../css/x/xcse264kq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="fawnadrdb"/><path class="xcse264kq"/></g>`,
		"fallback": "icon-park-solid:menu-fold-one",
	});
}

export default Component;
