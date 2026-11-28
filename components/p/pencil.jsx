import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7d_q8bib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7d_q8bib"/>`,
		"fallback": "noviair-light:pencil",
	});
}

export default Component;
