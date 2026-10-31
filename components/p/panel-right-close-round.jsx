import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wce1258hs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wce1258hs"/>`,
		"fallback": "coolicons:panel-right-close-round",
	});
}

export default Component;
