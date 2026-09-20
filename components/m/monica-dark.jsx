import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hve1lylaa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hve1lylaa"/>`,
		"fallback": "selfhst:monica-dark",
	});
}

export default Component;
