import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia_j65b2d.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia_j65b2d"/>`,
		"fallback": "picon:umbrella",
	});
}

export default Component;
