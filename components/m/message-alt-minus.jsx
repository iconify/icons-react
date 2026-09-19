import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exdpxya2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exdpxya2l"/>`,
		"fallback": "bxs:message-alt-minus",
	});
}

export default Component;
