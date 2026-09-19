import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h65tdvo6n.css';
import '../../css/o/o5a8bt7sp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h65tdvo6n"/><path class="o5a8bt7sp"/>`,
		"fallback": "bxs:videos",
	});
}

export default Component;
