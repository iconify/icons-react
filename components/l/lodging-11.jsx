import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu23jnb6j.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu23jnb6j"/>`,
		"fallback": "maki:lodging-11",
	});
}

export default Component;
