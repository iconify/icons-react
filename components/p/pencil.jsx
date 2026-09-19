import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xugfypbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xugfypbix"/>`,
		"fallback": "humbleicons:pencil",
	});
}

export default Component;
