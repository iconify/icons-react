import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni_93gbhq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni_93gbhq"/>`,
		"fallback": "selfhst:microsoft-edge-light",
	});
}

export default Component;
