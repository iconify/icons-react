import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_x39ac_r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k_x39ac_r"/>`,
		"fallback": "lsicon:out-of-warehouse-filled",
	});
}

export default Component;
