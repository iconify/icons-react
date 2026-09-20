import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd6hosbxv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd6hosbxv"/>`,
		"fallback": "ix:live-feed",
	});
}

export default Component;
