import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i67z77bnm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i67z77bnm"/>`,
		"fallback": "streamline:notification-application-1-solid",
	});
}

export default Component;
