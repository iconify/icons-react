import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj4pi6b5z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj4pi6b5z"/>`,
		"fallback": "streamline:interface-folder-zip-zip-folder-compact",
	});
}

export default Component;
