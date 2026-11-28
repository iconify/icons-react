import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypva6o2qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypva6o2qf"/>`,
		"fallback": "noviair-light:map-check",
	});
}

export default Component;
