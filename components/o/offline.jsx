import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r50oo_b3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r50oo_b3z"/>`,
		"fallback": "nrk:offline",
	});
}

export default Component;
