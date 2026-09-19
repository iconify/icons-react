import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe3c2ebyo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe3c2ebyo"/>`,
		"fallback": "fa7-brands:tidal",
	});
}

export default Component;
