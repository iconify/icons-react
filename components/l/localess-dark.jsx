import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvh8ypbbx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvh8ypbbx"/>`,
		"fallback": "selfhst:localess-dark",
	});
}

export default Component;
