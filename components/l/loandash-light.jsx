import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j68bju_gm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j68bju_gm"/>`,
		"fallback": "selfhst:loandash-light",
	});
}

export default Component;
