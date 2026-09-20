import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hfh7n4q9t.css';
import '../../css/g/gbyydzvwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hfh7n4q9t"/><path class="gbyydzvwy"/></g>`,
		"fallback": "streamline-freehand:mobilephone-action-notification-allowed",
	});
}

export default Component;
