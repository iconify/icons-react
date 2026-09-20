import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iis2jirxu.css';
import '../../css/f/fpfbwk8vq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iis2jirxu"/><path class="fpfbwk8vq"/>`,
		"fallback": "selfhst:outline",
	});
}

export default Component;
