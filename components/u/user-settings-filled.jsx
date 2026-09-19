import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg-_9kbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xg-_9kbpk"/>`,
		"fallback": "griddy-icons:user-settings-filled",
	});
}

export default Component;
