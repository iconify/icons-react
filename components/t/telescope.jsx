import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wz99rl-4z.css';
import '../../css/r/rlyoxbbqo.css';
import '../../css/e/e7i9vlb7g.css';
import '../../css/e/enydk0bnc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="wz99rl-4z"/><rect class="rlyoxbbqo"/><path class="e7i9vlb7g"/><path class="enydk0bnc"/></g>`,
		"fallback": "icon-park-outline:telescope",
	});
}

export default Component;
