import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_cbxqb7r.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_cbxqb7r"/>`,
		"fallback": "picon:viking",
	});
}

export default Component;
