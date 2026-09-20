import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-21qrbsi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m-21qrbsi"/>`,
		"fallback": "streamline-plump:ringing-bell-notification-solid",
	});
}

export default Component;
