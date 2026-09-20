import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0oa4jz6x.css';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i0oa4jz6x"/>`,
		"fallback": "thesvg-color:raycast",
	});
}

export default Component;
