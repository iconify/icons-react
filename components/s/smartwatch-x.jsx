import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa1vadc0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa1vadc0s"/>`,
		"fallback": "noviair-light:smartwatch-x",
	});
}

export default Component;
