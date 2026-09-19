import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/skq3n9b_j.css';
import '../../css/n/n98ciob7o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="skq3n9b_j"/><path class="n98ciob7o"/></g>`,
		"fallback": "icon-park-outline:two-dimensional-code-one",
	});
}

export default Component;
