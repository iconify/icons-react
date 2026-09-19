import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5ljdnlay.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5ljdnlay"/>`,
		"fallback": "whh:sputnik",
	});
}

export default Component;
