import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbh3g-16i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbh3g-16i"/>`,
		"fallback": "circum:signpost-l-1",
	});
}

export default Component;
