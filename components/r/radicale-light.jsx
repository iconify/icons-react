import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe38t4jqu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe38t4jqu"/>`,
		"fallback": "selfhst:radicale-light",
	});
}

export default Component;
