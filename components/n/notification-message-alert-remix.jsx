import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4i95ksyp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r4i95ksyp"/>`,
		"fallback": "streamline:notification-message-alert-remix",
	});
}

export default Component;
