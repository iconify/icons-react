import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5cg8fb9r.css';
import '../../css/e/eco-ymk_i.css';
import '../../css/l/lwcbfpoys.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y5cg8fb9r"><path class="eco-ymk_i"/><path class="lwcbfpoys"/></g>`,
		"fallback": "icon-park-outline:towel",
	});
}

export default Component;
