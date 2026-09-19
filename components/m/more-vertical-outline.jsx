import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_8bvqb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="more-vertical-outline"><path class="Vector t_8bvqb7k"/></g>`,
		"fallback": "cuida:more-vertical-outline",
	});
}

export default Component;
