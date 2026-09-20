import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky01pldxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky01pldxk"/>`,
		"fallback": "streamline-freehand:messages-bubble-sms-block-1",
	});
}

export default Component;
