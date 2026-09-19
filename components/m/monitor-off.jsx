import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/j8dwdkbwo.css';
import '../../css/v/vjtozk_jx.css';
import '../../css/c/c6oktlogx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="j8dwdkbwo"/><path clip-rule="evenodd" class="vjtozk_jx"/><path class="c6oktlogx"/></g>`,
		"fallback": "icon-park:monitor-off",
	});
}

export default Component;
