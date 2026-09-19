import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu8h-ub7m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu8h-ub7m"/>`,
		"fallback": "ion:md-copy",
	});
}

export default Component;
