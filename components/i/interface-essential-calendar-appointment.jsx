import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnjeqrbwo.css';
import '../../css/r/rb9gs_bvf.css';
import '../../css/o/oqampul9e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnjeqrbwo"/><path class="rb9gs_bvf"/><path class="oqampul9e"/>`,
		"fallback": "streamline-pixel:interface-essential-calendar-appointment",
	});
}

export default Component;
