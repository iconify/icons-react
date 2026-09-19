import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-06-6rfb.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-06-6rfb"/>`,
		"fallback": "whh:lifepreserver",
	});
}

export default Component;
