import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aif56fbzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aif56fbzi"/>`,
		"fallback": "mdi:pine-tree-variant",
	});
}

export default Component;
