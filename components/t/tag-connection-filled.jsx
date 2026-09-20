import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsztftb1e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jsztftb1e"/>`,
		"fallback": "ix:tag-connection-filled",
	});
}

export default Component;
