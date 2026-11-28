import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xblgt7bom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xblgt7bom"/>`,
		"fallback": "noviair-light:pine-tree",
	});
}

export default Component;
