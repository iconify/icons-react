import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d_2u8qgkv.css';
import '../../css/o/o2fi4kbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="d_2u8qgkv"/><path class="o2fi4kbpr"/></g>`,
		"fallback": "streamline-freehand:mobilephone-action-lock",
	});
}

export default Component;
