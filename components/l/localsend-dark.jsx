import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c15i9ac9v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c15i9ac9v"/>`,
		"fallback": "selfhst:localsend-dark",
	});
}

export default Component;
