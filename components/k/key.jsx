import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwvivlg5z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwvivlg5z"/>`,
		"fallback": "fxemoji:key",
	});
}

export default Component;
