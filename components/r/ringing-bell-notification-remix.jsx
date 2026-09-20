import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0kealb6i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j0kealb6i"/>`,
		"fallback": "streamline-plump:ringing-bell-notification-remix",
	});
}

export default Component;
