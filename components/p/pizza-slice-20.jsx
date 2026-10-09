import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_g30-bhd.css';
import '../../css/c/ce0hw2blf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_g30-bhd"/><path class="ce0hw2blf"/>`,
		"fallback": "energy-icons:pizza-slice-20",
	});
}

export default Component;
