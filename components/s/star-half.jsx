import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfs0h1b1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfs0h1b1o"/>`,
		"fallback": "tabler:star-half",
	});
}

export default Component;
