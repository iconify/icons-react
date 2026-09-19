import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y0qsdml2u.css';
import '../../css/f/fn0mqjbki.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y0qsdml2u"/><path class="fn0mqjbki"/></g>`,
		"fallback": "bi:sign-no-parking-fill",
	});
}

export default Component;
