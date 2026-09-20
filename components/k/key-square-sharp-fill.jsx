import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdjbtzpxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdjbtzpxr"/>`,
		"fallback": "keyline-icons:key-square-sharp-fill",
	});
}

export default Component;
