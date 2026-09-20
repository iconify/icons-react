import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur913e2io.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur913e2io"/>`,
		"fallback": "selfhst:mixpost-dark",
	});
}

export default Component;
