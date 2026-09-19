import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsg9ixp1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsg9ixp1r"/>`,
		"fallback": "fontisto:subscript",
	});
}

export default Component;
