import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvmcp3bzr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvmcp3bzr"/>`,
		"fallback": "selfhst:progressive-light",
	});
}

export default Component;
