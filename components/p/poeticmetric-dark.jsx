import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxxup7lke.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxxup7lke"/>`,
		"fallback": "selfhst:poeticmetric-dark",
	});
}

export default Component;
