import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tqlm7mbve.css';
import '../../css/v/v41b02cqh.css';
import '../../css/z/zy4l07ubm.css';
import '../../css/w/wthrl6dqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tqlm7mbve"/><path class="v41b02cqh"/><path class="zy4l07ubm"/><path class="wthrl6dqm"/></g>`,
		"fallback": "streamline-freehand:mobilephone-action-location-lock",
	});
}

export default Component;
