import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9pvjwbtk.css';

const viewBox = {"width":1025,"height":1026};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9pvjwbtk"/>`,
		"fallback": "whh:textlayer",
	});
}

export default Component;
