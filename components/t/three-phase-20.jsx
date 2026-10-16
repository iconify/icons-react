import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-1w69bzi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-1w69bzi"/>`,
		"fallback": "energy-icons:three-phase-20",
	});
}

export default Component;
