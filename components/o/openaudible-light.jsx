import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta1wfgekf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta1wfgekf"/>`,
		"fallback": "selfhst:openaudible-light",
	});
}

export default Component;
