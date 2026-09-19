import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/u/u43xw6b7o.css';
import '../../css/l/lqwcol_8m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="u43xw6b7o"/><path class="lqwcol_8m"/></g>`,
		"fallback": "icon-park-solid:report",
	});
}

export default Component;
