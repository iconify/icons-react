import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e56134f3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e56134f3d"/>`,
		"fallback": "noviair-light:package-plus",
	});
}

export default Component;
