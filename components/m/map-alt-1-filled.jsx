import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbb6zhbyr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jbb6zhbyr"/>`,
		"fallback": "ix:map-alt-1-filled",
	});
}

export default Component;
