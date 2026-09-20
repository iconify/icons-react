import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad1b9_ipc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ad1b9_ipc"/>`,
		"fallback": "streamline-flex:mail-send-envelope-solid",
	});
}

export default Component;
