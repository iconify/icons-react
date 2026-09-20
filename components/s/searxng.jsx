import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq0-f_nih.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq0-f_nih"/>`,
		"fallback": "selfhst:searxng",
	});
}

export default Component;
