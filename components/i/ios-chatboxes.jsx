import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgj2dwchq.css';
import '../../css/a/airmpdfkd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgj2dwchq"/><path class="airmpdfkd"/>`,
		"fallback": "ion:ios-chatboxes",
	});
}

export default Component;
