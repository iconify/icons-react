import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3ge_6bdy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3ge_6bdy"/>`,
		"fallback": "ix:pc-tower",
	});
}

export default Component;
