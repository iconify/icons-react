import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bflich7ut.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bflich7ut"/>`,
		"fallback": "fa7-brands:korvue",
	});
}

export default Component;
