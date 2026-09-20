import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z-b2c791g.css';
import '../../css/u/u86f6ac4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z-b2c791g"/><path class="u86f6ac4a"/></g>`,
		"fallback": "streamline-freehand:mobilephone-action-otp-message",
	});
}

export default Component;
