import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1a8dhblf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1a8dhblf"/>`,
		"fallback": "ix:namur-check-function-filled",
	});
}

export default Component;
