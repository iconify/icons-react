import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqfje-b4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqfje-b4x"/>`,
		"fallback": "mdi-light:unfold-less-horizontal",
	});
}

export default Component;
