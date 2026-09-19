import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-xyt2bqn.css';
import '../../css/j/jv1uty-pu.css';
import '../../css/n/nvyiwwbus.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-xyt2bqn"/><path class="jv1uty-pu"/><path class="nvyiwwbus"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:update-line",
	});
}

export default Component;
