import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8goy05sw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8goy05sw"/>`,
		"fallback": "fxemoji:notchedrightsemi3dot",
	});
}

export default Component;
