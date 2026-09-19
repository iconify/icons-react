import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/e/e1crn0bur.css';
import '../../css/f/f13g7bbsq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="e1crn0bur"/><path class="f13g7bbsq"/></g>`,
		"fallback": "icon-park-outline:thermos-cup",
	});
}

export default Component;
