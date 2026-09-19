import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b51e4wr8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b51e4wr8j"/>`,
		"fallback": "griddy-icons:notification-new-filled",
	});
}

export default Component;
