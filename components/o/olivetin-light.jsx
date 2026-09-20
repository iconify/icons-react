import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y39o3w7xc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y39o3w7xc"/>`,
		"fallback": "selfhst:olivetin-light",
	});
}

export default Component;
