import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/b4vu6sw6p.css';
import '../../css/p/pd96x61hh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="b4vu6sw6p"/><path class="pd96x61hh"/></g>`,
		"fallback": "streamline-ultimate:toggle-setting-on",
	});
}

export default Component;
