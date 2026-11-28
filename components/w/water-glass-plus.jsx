import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msh8qpjuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msh8qpjuc"/>`,
		"fallback": "noviair-light:water-glass-plus",
	});
}

export default Component;
