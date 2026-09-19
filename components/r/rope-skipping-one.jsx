import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/w3w5w2bqf.css';
import '../../css/m/mgzxm9bxu.css';
import '../../css/o/od5ee_bsf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="w3w5w2bqf"/><path class="mgzxm9bxu"/><path class="od5ee_bsf"/></g>`,
		"fallback": "icon-park:rope-skipping-one",
	});
}

export default Component;
