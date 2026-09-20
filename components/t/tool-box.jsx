import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/h/hwqlugc7u.css';
import '../../css/x/x8k7tccux.css';
import '../../css/q/qsp6au5vk.css';
import '../../css/y/ym9xv8b7x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="hwqlugc7u"/><path class="x8k7tccux"/><path class="qsp6au5vk"/><path class="ym9xv8b7x"/></g>`,
		"fallback": "streamline-plump:tool-box",
	});
}

export default Component;
