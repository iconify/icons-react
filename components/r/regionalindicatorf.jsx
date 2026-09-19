import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbd350alm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbd350alm"/>`,
		"fallback": "fxemoji:regionalindicatorf",
	});
}

export default Component;
