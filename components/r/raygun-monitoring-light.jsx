import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvqnthbsg.css';
import '../../css/b/bh48ipmmn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvqnthbsg"/><path class="bh48ipmmn"/>`,
		"fallback": "selfhst:raygun-monitoring-light",
	});
}

export default Component;
