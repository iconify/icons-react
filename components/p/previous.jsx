import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8gm18wil.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8gm18wil"/>`,
		"fallback": "whh:previous",
	});
}

export default Component;
