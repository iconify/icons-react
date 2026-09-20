import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwgzm4b3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwgzm4b3d"/>`,
		"fallback": "mdi:rename-outline",
	});
}

export default Component;
