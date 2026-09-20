import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unav5rb9k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unav5rb9k"/>`,
		"fallback": "selfhst:kubetail-dark",
	});
}

export default Component;
