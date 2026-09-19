import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x_-1fk5qn.css';
import '../../css/i/id7cegb_e.css';
import '../../css/l/loc2q-8hs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="x_-1fk5qn"/><path class="id7cegb_e"/><path class="loc2q-8hs"/></g>`,
		"fallback": "icon-park-outline:sun",
	});
}

export default Component;
