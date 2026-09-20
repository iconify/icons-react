import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj1jmq0fl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj1jmq0fl"/>`,
		"fallback": "selfhst:warracker",
	});
}

export default Component;
