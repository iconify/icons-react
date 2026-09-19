import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4ostgxng.css';

const viewBox = {"width":1025,"height":1027};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4ostgxng"/>`,
		"fallback": "whh:pigpeny",
	});
}

export default Component;
