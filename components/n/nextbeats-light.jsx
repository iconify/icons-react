import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdhcrkb4g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdhcrkb4g"/>`,
		"fallback": "selfhst:nextbeats-light",
	});
}

export default Component;
