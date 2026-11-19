import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mub0vqb3k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mub0vqb3k"/>`,
		"fallback": "selfhst:uxwizz-dark",
	});
}

export default Component;
