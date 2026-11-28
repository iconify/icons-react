import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij_9gl4fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij_9gl4fp"/>`,
		"fallback": "noviair:passport",
	});
}

export default Component;
