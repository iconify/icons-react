import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh2ydkb0m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh2ydkb0m"/>`,
		"fallback": "ion:md-arrow-dropup-circle",
	});
}

export default Component;
