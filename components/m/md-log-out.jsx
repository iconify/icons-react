import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi-wnz67i.css';
import '../../css/e/eopo7lbmx.css';
import '../../css/p/p4xyc1bjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi-wnz67i"/><path class="eopo7lbmx"/><path class="p4xyc1bjj"/>`,
		"fallback": "ion:md-log-out",
	});
}

export default Component;
