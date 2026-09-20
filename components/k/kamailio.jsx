import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsex8rb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsex8rb1e"/>`,
		"fallback": "thesvg:kamailio",
	});
}

export default Component;
