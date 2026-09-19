import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/d/d8ouolbqn.css';
import '../../css/w/wbasp_ynt.css';
import '../../css/w/wp3pith5r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="d8ouolbqn"/><path class="wbasp_ynt"/><path class="wp3pith5r"/></g>`,
		"fallback": "icon-park-outline:picture-album",
	});
}

export default Component;
