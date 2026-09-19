import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c52v18b9m.css';
import '../../css/v/vu9m0dbsd.css';
import '../../css/u/u5qmq6bbx.css';
import '../../css/c/c297e7buy.css';
import '../../css/y/yqdzk4yeb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="c52v18b9m"/><circle class="vu9m0dbsd"/><rect class="u5qmq6bbx"/><rect class="c297e7buy"/><path class="yqdzk4yeb"/></g>`,
		"fallback": "icon-park-outline:phonograph",
	});
}

export default Component;
