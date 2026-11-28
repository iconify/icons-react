import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mflq9obzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mflq9obzx"/>`,
		"fallback": "noviair-light:pill-bottle-clock",
	});
}

export default Component;
