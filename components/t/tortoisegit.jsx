import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-3u1wzsi.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-3u1wzsi"/>`,
		"fallback": "thesvg:tortoisegit",
	});
}

export default Component;
