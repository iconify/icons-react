import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci49n8l4p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci49n8l4p"/>`,
		"fallback": "selfhst:projectsend-light",
	});
}

export default Component;
