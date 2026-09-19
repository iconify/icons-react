import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/l/llcnvrb_r.css';
import '../../css/l/lu23enbij.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="llcnvrb_r"/><path class="lu23enbij"/></g>`,
		"fallback": "icon-park-outline:speaker",
	});
}

export default Component;
