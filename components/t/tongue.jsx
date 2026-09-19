import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imw1e3big.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imw1e3big"/>`,
		"fallback": "icomoon-free:tongue",
	});
}

export default Component;
