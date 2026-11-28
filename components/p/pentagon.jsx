import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lff_3fe-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lff_3fe-r"/>`,
		"fallback": "noviair-light:pentagon",
	});
}

export default Component;
