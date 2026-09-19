import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt85k4fna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt85k4fna"/>`,
		"fallback": "heroicons-outline:plus",
	});
}

export default Component;
