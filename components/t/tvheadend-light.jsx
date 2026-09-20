import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1khq4_3q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1khq4_3q"/>`,
		"fallback": "selfhst:tvheadend-light",
	});
}

export default Component;
