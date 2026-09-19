import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzdt_tbkb.css';
import '../../css/u/uh6i7ubar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzdt_tbkb"/><path class="uh6i7ubar"/>`,
		"fallback": "eva:pin-outline",
	});
}

export default Component;
