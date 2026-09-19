import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/u/uocdgacuo.css';
import '../../css/u/utoe8x85b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="uocdgacuo"/><path class="utoe8x85b"/></g>`,
		"fallback": "icon-park-outline:people-download",
	});
}

export default Component;
