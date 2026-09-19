import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2s4x9i3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2s4x9i3l"/>`,
		"fallback": "cbi:twinkly-c9",
	});
}

export default Component;
