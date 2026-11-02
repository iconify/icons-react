import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe3uj_7em.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe3uj_7em"/>`,
		"fallback": "mingcute:library-fill",
	});
}

export default Component;
