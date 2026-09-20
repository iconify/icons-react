import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk4ea3bis.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk4ea3bis"/>`,
		"fallback": "selfhst:openaudible-dark",
	});
}

export default Component;
