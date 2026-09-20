import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkcbdbnge.css';
import '../../css/r/rdd8ibbkh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkcbdbnge"/><path class="rdd8ibbkh"/>`,
		"fallback": "selfhst:tidyquest-light",
	});
}

export default Component;
