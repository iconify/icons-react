import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntk51_c5t.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntk51_c5t"/>`,
		"fallback": "whh:leechprotect",
	});
}

export default Component;
