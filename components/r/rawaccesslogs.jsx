import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-5oytupx.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-5oytupx"/>`,
		"fallback": "whh:rawaccesslogs",
	});
}

export default Component;
