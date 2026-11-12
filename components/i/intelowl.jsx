import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uonhm3b8o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uonhm3b8o"/>`,
		"fallback": "selfhst:intelowl",
	});
}

export default Component;
