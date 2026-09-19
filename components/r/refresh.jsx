import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p18owjbby.css';

const viewBox = {"width":1024,"height":1027};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p18owjbby"/>`,
		"fallback": "whh:refresh",
	});
}

export default Component;
