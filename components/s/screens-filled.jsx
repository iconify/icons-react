import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrwdj-b3w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrwdj-b3w"/>`,
		"fallback": "ix:screens-filled",
	});
}

export default Component;
