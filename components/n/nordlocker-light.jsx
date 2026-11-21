import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyvy9zbzq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyvy9zbzq"/>`,
		"fallback": "selfhst:nordlocker-light",
	});
}

export default Component;
