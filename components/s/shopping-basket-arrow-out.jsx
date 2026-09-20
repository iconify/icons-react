import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zn702dp6u.css';
import '../../css/v/vbmlwcqvh.css';
import '../../css/u/uc87z9emd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zn702dp6u"/><path class="vbmlwcqvh"/><path class="uc87z9emd"/></g>`,
		"fallback": "streamline-freehand:shopping-basket-arrow-out",
	});
}

export default Component;
