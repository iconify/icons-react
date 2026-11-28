import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0j9t958u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0j9t958u"/>`,
		"fallback": "noviair-light:library",
	});
}

export default Component;
