import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/p/pr0r_23gm.css';
import '../../css/e/eyod_mk5k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path clip-rule="evenodd" class="pr0r_23gm"/><path class="eyod_mk5k"/></g>`,
		"fallback": "icon-park-solid:water-level",
	});
}

export default Component;
