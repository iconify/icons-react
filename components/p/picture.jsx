import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1liorbqb.css';

const viewBox = {"width":1360,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1liorbqb"/>`,
		"fallback": "websymbol:picture",
	});
}

export default Component;
