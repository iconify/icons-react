import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/s/sb_9ycbok.css';
import '../../css/r/rl-0a4btd.css';
import '../../css/j/j6junebmh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="sb_9ycbok"/><rect class="rl-0a4btd"/><path class="j6junebmh"/></g>`,
		"fallback": "icon-park:order",
	});
}

export default Component;
