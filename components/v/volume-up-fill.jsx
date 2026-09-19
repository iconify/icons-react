import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo_ygpbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lo_ygpbrs"/>`,
		"fallback": "iconamoon:volume-up-fill",
	});
}

export default Component;
