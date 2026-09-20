import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/b/b1mom6sfl.css';
import '../../css/i/i9yzzxiub.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="b1mom6sfl"/><path class="i9yzzxiub"/></g>`,
		"fallback": "streamline-plump:screen-1",
	});
}

export default Component;
