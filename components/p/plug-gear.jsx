import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndvy_ubls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndvy_ubls"/>`,
		"fallback": "noviair-light:plug-gear",
	});
}

export default Component;
