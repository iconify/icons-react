import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksl-n8z_w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksl-n8z_w"/>`,
		"fallback": "fa-solid:search-dollar",
	});
}

export default Component;
