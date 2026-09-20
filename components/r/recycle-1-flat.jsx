import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnxi2rbnm.css';
import '../../css/u/ufjgw78te.css';
import '../../css/b/bj-y4g4bm.css';
import '../../css/n/n5-oh3bbk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wnxi2rbnm"><path class="ufjgw78te"/><path class="bj-y4g4bm"/><path class="n5-oh3bbk"/></g>`,
		"fallback": "streamline-plump-color:recycle-1-flat",
	});
}

export default Component;
