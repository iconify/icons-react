import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4dijcbab.css';
import '../../css/c/c5p0drbtm.css';
import '../../css/w/wnav2ee8p.css';

const viewBox = {"width":69.2,"height":108.3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4dijcbab"/><path class="c5p0drbtm"/><path class="wnav2ee8p"/>`,
		"fallback": "thesvg-color:procure",
	});
}

export default Component;
