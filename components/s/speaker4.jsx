import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/h/hgce2bydp.css';
import '../../css/p/puqx3wb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="hgce2bydp"/><path class="puqx3wb1e"/></g>`,
		"fallback": "reicon:speaker4",
	});
}

export default Component;
