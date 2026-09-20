import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox8shz4bd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox8shz4bd"/>`,
		"fallback": "tabler:message-circle-filled",
	});
}

export default Component;
