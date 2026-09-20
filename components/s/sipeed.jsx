import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rld-_ccic.css';
import '../../css/v/vl74ao08p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rld-_ccic"/><path class="vl74ao08p"/>`,
		"fallback": "selfhst:sipeed",
	});
}

export default Component;
