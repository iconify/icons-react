import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blisqn98m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blisqn98m"/>`,
		"fallback": "selfhst:mkdocs-dark",
	});
}

export default Component;
