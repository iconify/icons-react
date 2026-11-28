import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2guufm2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2guufm2g"/>`,
		"fallback": "noviair-light:route-check",
	});
}

export default Component;
