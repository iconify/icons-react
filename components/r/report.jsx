import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gj6zyyb1c.css';
import '../../css/l/lqwcol_8m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="gj6zyyb1c"/><path class="lqwcol_8m"/></g>`,
		"fallback": "icon-park-outline:report",
	});
}

export default Component;
