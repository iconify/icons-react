import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/okxajr9vx.css';
import '../../css/i/ig-relb4b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="okxajr9vx"/><path class="ig-relb4b"/></g>`,
		"fallback": "icon-park:right-small-down",
	});
}

export default Component;
