import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prptthbtt.css';
import '../../css/w/wu4g6i-qu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prptthbtt"/><path class="wu4g6i-qu"/>`,
		"fallback": "selfhst:teslamate",
	});
}

export default Component;
