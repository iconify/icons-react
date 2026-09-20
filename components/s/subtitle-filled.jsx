import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5kz7ap7z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x5kz7ap7z"/>`,
		"fallback": "ix:subtitle-filled",
	});
}

export default Component;
