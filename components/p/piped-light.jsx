import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f88f6cb-x.css';
import '../../css/a/a2th6qhaq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f88f6cb-x"/><path class="a2th6qhaq"/>`,
		"fallback": "selfhst:piped-light",
	});
}

export default Component;
