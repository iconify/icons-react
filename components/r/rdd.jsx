import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dxla8wbho.css';
import '../../css/m/md286fbip.css';
import '../../css/w/wgvvon-ub.css';
import '../../css/d/dki4y58rp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="dxla8wbho"/><g class="md286fbip"><path class="wgvvon-ub"/><path class="dki4y58rp"/></g></g>`,
		"fallback": "cryptocurrency-color:rdd",
	});
}

export default Component;
