import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/o4_dtfbdv.css';
import '../../css/b/b09vrpfly.css';
import '../../css/e/e1444ccft.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="o4_dtfbdv"/><path class="b09vrpfly"/><path clip-rule="evenodd" class="e1444ccft"/></g>`,
		"fallback": "icon-park-solid:music-one",
	});
}

export default Component;
