import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgj78ccgi.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgj78ccgi"/>`,
		"fallback": "fa7-brands:symfonycasts",
	});
}

export default Component;
