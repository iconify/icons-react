import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzi9mqbsi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzi9mqbsi"/>`,
		"fallback": "streamline:rss-symbol",
	});
}

export default Component;
