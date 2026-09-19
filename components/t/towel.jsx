import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5cg8fb9r.css';
import '../../css/u/u-xs2kb6z.css';
import '../../css/l/lwcbfpoys.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y5cg8fb9r"><path class="u-xs2kb6z"/><path class="lwcbfpoys"/></g>`,
		"fallback": "icon-park-solid:towel",
	});
}

export default Component;
