import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5cg8fb9r.css';
import '../../css/x/x7-298bge.css';
import '../../css/j/jp5a_pbwx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y5cg8fb9r"><path class="x7-298bge"/><path class="jp5a_pbwx"/></g>`,
		"fallback": "icon-park-solid:treadmill",
	});
}

export default Component;
