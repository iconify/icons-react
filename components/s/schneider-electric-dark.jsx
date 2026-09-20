import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrmsgxw5q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrmsgxw5q"/>`,
		"fallback": "selfhst:schneider-electric-dark",
	});
}

export default Component;
