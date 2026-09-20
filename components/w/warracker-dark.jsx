import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd98yeb8o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd98yeb8o"/>`,
		"fallback": "selfhst:warracker-dark",
	});
}

export default Component;
