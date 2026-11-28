import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-w47cb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-w47cb3g"/>`,
		"fallback": "noviair:user-info",
	});
}

export default Component;
