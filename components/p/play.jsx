import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn9b94bna.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn9b94bna"/>`,
		"fallback": "foundation:play",
	});
}

export default Component;
