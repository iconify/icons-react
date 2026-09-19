import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xngdku6ad.css';
import '../../css/p/pzopvfbeg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="xngdku6ad"/><path class="pzopvfbeg"/></g>`,
		"fallback": "icon-park-outline:screwdriver",
	});
}

export default Component;
