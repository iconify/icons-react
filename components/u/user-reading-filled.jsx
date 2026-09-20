import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joxi-ub2v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="joxi-ub2v"/>`,
		"fallback": "ix:user-reading-filled",
	});
}

export default Component;
