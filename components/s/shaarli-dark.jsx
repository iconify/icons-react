import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt4q6qbni.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt4q6qbni"/>`,
		"fallback": "selfhst:shaarli-dark",
	});
}

export default Component;
