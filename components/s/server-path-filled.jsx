import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezof65bpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ezof65bpn"/>`,
		"fallback": "reicon:server-path-filled",
	});
}

export default Component;
