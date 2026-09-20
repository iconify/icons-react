import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzam9lb4s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzam9lb4s"/>`,
		"fallback": "selfhst:tp-link",
	});
}

export default Component;
