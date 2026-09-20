import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdevb0p2m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdevb0p2m"/>`,
		"fallback": "streamline:interface-arrows-vertical-expand-resize-bigger-vertical-small-smaller-size-arrow-arrows-big",
	});
}

export default Component;
